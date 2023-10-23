import React, { useEffect, useState } from 'react'
import './assets/theme/colors.css'
import AssesmentPage from './pages/AssesmentPage/AssesmentPage';
import AssesmentPageDesktop from './pages/AssesmentPage/AssesmentPageDesktop';
function App() {
  const [isDesktop, setIsDesktop] = useState(false)

  const handleDesktopIconClick = () => {
    if (!isDesktop) {
      alert("Please increase your screen width to more than 900px ")
    }
  }
  const handleMsiteIconClick = () => {
    if (isDesktop) {
      alert("Please reduce your screen size to less then 900px ")

    }
  }
  function handleWindowResize() {
    const resolution = window.innerWidth;
    setIsDesktop(resolution >= 900)
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
  return (
    <div className="App">
      {!isDesktop ? <AssesmentPage isDesktop={isDesktop} onDesktopIconClick={handleDesktopIconClick} /> :
        <AssesmentPageDesktop isDesktop={isDesktop} onMsiteIconClick={handleMsiteIconClick} />}
    </div>
  );
}

export default App;
