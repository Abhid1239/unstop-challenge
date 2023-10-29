import React, { useEffect, useState } from 'react'
import './assets/theme/colors.css'
import { useResizeHook } from './hooks/useResizeHook';
import AssesmentPage from './pages/AssesmentPage/AssesmentPage';
import AssesmentPageDesktop from './pages/AssesmentPage/AssesmentPageDesktop';
function App() {
  const [windowWidth,] = useResizeHook();
  const isDesktop = windowWidth >= 900;

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
  return (
    <div className="App">
      {!isDesktop ? <AssesmentPage isDesktop={isDesktop} onDesktopIconClick={handleDesktopIconClick} /> :
        <AssesmentPageDesktop isDesktop={isDesktop} onMsiteIconClick={handleMsiteIconClick} />}
    </div>
  );
}

export default App;
