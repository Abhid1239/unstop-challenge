import React, { useEffect, useState } from 'react'
import './assets/theme/colors.css'
import AssesmentPage from './pages/AssesmentPage/AssesmentPage';
import AssesmentPageDesktop from './pages/AssesmentPage/AssesmentPageDesktop';
function App() {
  const [isDesktop, setIsDesktop] = useState(false)

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
      {!isDesktop ? <AssesmentPage isDesktop={isDesktop} /> :
        <AssesmentPageDesktop isDesktop={isDesktop} />}
    </div>
  );
}

export default App;
