import React from 'react'
import Footer from '../layout/Footer'
import Content from '../layout/Content'
import Header from '../layout/Header'
// import Java from './Java'
// import Javas from './JavaS'
// import Main from './Main'
// import Reacts from './Reacts'
// import Springboot from './Springboot'
import {BrowserRouter} from 'react-router-dom';


function Page() {
  
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Content/>
      <Footer/>
      </BrowserRouter>
      {/* <Java/>
      <Javas/>
      <Main/>
      <Reacts/>
      <Springboot/> */}

    </div>
  )
}

export default Page