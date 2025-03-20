import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollTopButton from '../components/elements/ScrollTopButton'
import Chatbot from '../components/chatbot/Chatbot'

const index = () => {
  return (
    <>
     <Header/>
     <Outlet/>
     <ScrollTopButton/>
     <Footer/>
     
     <Chatbot/>

     

    </>
  )
}

export default index