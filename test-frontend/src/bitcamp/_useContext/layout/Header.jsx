import React from 'react'
import './layout.css'

function Header() {

    const styles = {
        header:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          padding:10,
          color:'#111',
          backgroundColor:'#eee',
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
      

  return (
    <>
        <header style={styles.header}>
            <img src='1.png' alt='' style={styles.avatar}/>
            <h4 style={styles.h4}>
               HomePage
                <i className="fa-solid fa-house-user"></i>
            </h4>
            
            <div>
                <ul style={styles.ul}>
                    <li>HOME</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>JAVA</li>
                    <li>Springboot</li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default Header