import React from 'react'
import { ThemeContext } from '../context/ThemeContext';

const styles = {
  footer:{
    backgroundColor:'#eee',
    height:100,
    display:'flex',
    // flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',  
    color:'#111',  
 
  },
 
  contain:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    // justifyContent: 'center',    
  }
};
 


function Footer() {

  

  return (
    <>
    <footer style={styles.footer}>
    <div className='contain' style={styles.contain}> 
    <p>Copyright © 2018 tcpschool.co.,Ltd. All rights reserved.</p>
    <address>Contact webmaster for more information. 070-1234-5678</address>
    <button className='btn btn-danger ml-3' >
      Dark
    </button>
      
      
      </div>
      </footer>
      </>
  )
}

export default Footer