import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const styles = {
  footer:{
    backgroundColor:'#CCD6A6',
    height:100,
    display:'flex',
    // flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',  
    color:'#F7EDDB', 
 
  },
 
  contain:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    // justifyContent: 'center',    
  }
};
 


function Footer() {

  const {isDark,setIsDark}=useContext(ThemeContext);

  const setDark= ()=>{
    return {...styles.footer,
    backgroundColor:'#333',color:'eee'
    }
  }
  
  const toggle=()=>{
      setIsDark(!isDark);
      
      document.querySelector('.btn').innerHTML=isDark? 'dark':'white'; 
  }
  

  return (
    <>
    <footer style={isDark? setDark():styles.footer}>
    <div className='contain' style={styles.contain}> 
    <p>Copyright © 2018 tcpschool.co.,Ltd. All rights reserved.
    Contact webmaster for more information. 070-1234-5678</p>
    <button className='btn btn-dark ml-3'
      onClick={toggle}
    >
      Dark
    </button>
      
      
      </div>
      </footer>
      </>
  )
}



export default Footer