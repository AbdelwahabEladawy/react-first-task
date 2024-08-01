import React from 'react'

export default function Contacts() {
  return (
    <div className="container m-auto  co1 w-75 ">
    <div className="inner d-flex  flex-column justify-content-start  align-items-center p-3 w-75 mx-auto ">
      <h1 className="align-self-center">CONTACT COMPONENT</h1>
      <div className="starStyle1 d-flex justify-content-center align-items-center mt-3 fw-bolder mb-5">
        <span className="decoration"></span>
        <i class="fa-solid fa-star  " id='star'></i>
        <span className="decoration"></span>

      </div>



<div className="myform w-100  vh-100">
  <input type="text" className='form-control my-5' placeholder='userName' />
      <input type="number" className='form-control my-5 ' placeholder='userName' />
      <input type="email  " className='form-control my-5' placeholder='userName' />
      <input type="password" className='form-control my-5' placeholder='userName' />
      <button className='btn btn-success btn-lg '> send message </button>
</div>


      </div>
      </div>

  )
}
