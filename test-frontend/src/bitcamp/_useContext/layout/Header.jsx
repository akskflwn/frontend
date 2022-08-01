import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import './layout.css'

import {NavLink} from 'react-router-dom';

function Header() {

    const styles = {
        header:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          padding:10,
          color:'#F7EDDB',
          backgroundColor:'#CCD6A6',
          justifyContent: 'center',
        },
        h4:{
          marginLeft:10,
          
        },
        avatar:{
          width:100,
          height:100,
          borderRadius:50,
        },
       
        ul:{
          width:400,
          listStyle:'none',
          display:'flex',
          justifyContent:'space-between',
          cursor:'pointer',
        },
      };
      
  const {isDark}=useContext(ThemeContext);

  const setDark=()=>{
    return {...styles.header,backgroundColor:'#333', color:'#222',  
  }
  }
  
  
  return (
    <>
        <header style={isDark? setDark():styles.header}>
            <img src='1.png' alt='' style={styles.avatar}/>
            <h4 style={styles.h4}>
               HomePage
                <i className="fa-solid fa-house-user"></i>
            </h4>
            
            <nav style={styles.ul}>
               
                    <NavLink to={"/"}>HOME</NavLink>
                    <NavLink to={"js"}>JavaScript</NavLink>
                    <NavLink to={"react"}>React</NavLink>
                    <NavLink to={"java"}>Java</NavLink>
                    <NavLink to={"add"}>register</NavLink>
            
            </nav>
        </header>
    </>
  )
}

export default Header