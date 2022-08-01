import React from 'react'

const styles = {
  h5: {
    marginTop: 100,
  },
  main:{
    height:700,
    color:'gray',
    backgroundColor:'white',
  }
};



function Content() {
  return (

    <main style={styles.main}>
    <div className='container text-center'>
      <h5 style={styles.h5}>main</h5>
    </div>
    </main>
  )
}

export default Content