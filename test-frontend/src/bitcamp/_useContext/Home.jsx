import React, { useState } from 'react'
import { ThemeContext } from './context/ThemeContext';

import Page from './pages/Page'

function Home() {
  const[isDark,setIsDark]=useState(false);

  console.log(isDark);

  
  return (
    <>
    <ThemeContext.Provider value={{isDark,setIsDark}}>
      <Page/>
    </ThemeContext.Provider>
      
      



    </>
  )
}

export default Home