import React from 'react'
import logo from "./../../assets/avataaars.svg"

export default function Home() {
  return (
    <div className='container-fluid co vh-100'>
      <div className="image p-5 w-100  m-auto  d-flex justify-content-center align-items-start">
      <img src={logo} alt="" className='w-25  ' />

      </div>
      <div className="caption ">
   <h1 className='text-center text-light'>START FRAMEWORK</h1>
   </div>
   <div className="starStyle d-flex justify-content-center align-items-center mt-3 fw-bolder">
 <span className="decoration"></span>
   <i class="fa-solid fa-star text-light"></i>
   <span className="decoration"></span>
 
   </div>

    </div>
  )
}
