import React from 'react'
import MyNav from '../../component/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/footer/Footer'

export default function MainLay() {
  return (
  <>
  <MyNav></MyNav>
 <Outlet></Outlet>
  <Footer></Footer>
  </>
  
  )
}
