import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Slider from '../ui/Slider';
import Main from '../pages/Main'
import Java from '../pages/Java'
import Reacts from '../pages/Reacts'
import Springboot from '../pages/Register'
import JavaS from '../pages/JavaS';
import Register from '../pages/Register';
import App from '../../../App';

const styles = {
  h5: {
    marginTop: 100,
  },
  main:{
    height:700,
    color:'gray',
    backgroundColor:'#DFE8CC',
  }
};



function Content() {
  const {isDark}=useContext(ThemeContext);

  const setDark=()=>{
    return {...styles.main,backgroundColor:'#222', color:'#eee',  
  }
}

  return (

    <main style={isDark?setDark():styles.main}>
    <div className='container text-center'>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/java' element={<Java/>}/>
        <Route path='/js' element={<JavaS/>}/>
        <Route path='/react' element={<Reacts/>}/>
        <Route path='/add' element={<App/>}/>
      </Routes>
      {/* <Slider/> */}
      
    </div>
    </main>
  )
}

export default Content