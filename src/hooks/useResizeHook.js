import React, { useEffect, useState } from 'react'

export const useResizeHook = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function handleWindowResize() {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        handleWindowResize();
        // Listen for the resize event and attach the event listener
        window.addEventListener("resize", handleWindowResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return { windowWidth: windowWidth, windowHeight: windowHeight };
};
