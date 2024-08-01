import React from 'react'
import icon1 from "../../../assets/poert1.png"
import icon2 from "../../../assets/port2.png"
import icon3 from "../../../assets/port3.png"
import Modal from '../../../component/Modal/Modal'

export default function Portfolio() {
  
  return (
    <div className="container-fluid m-auto  co1">
    <div className="inner d-flex  flex-column justify-content-start  align-items-center p-3 w-75 mx-auto ">
      <h1 className="align-self-center">PORTFOLIO COMPONENT</h1>
      <div className="starStyle1 d-flex justify-content-center align-items-center mt-3 fw-bolder">
        <span className="decoration"></span>
        <i class="fa-solid fa-star  " id='star'></i>
        <span className="decoration"></span>

      </div>

      <div className="cards por">
        <div className="row p-5 ">
  
       <div className="card col-12 col-md-4 p-2 rounded " >
          <img src={icon1} alt="" className='w-100 rounded '  />
          <div className="layer rounded d-flex justify-content-center align-items-center ">
          <i class="fa-solid fa-plus text-light fs-1 "></i>
        
          </div>
  </div>
       <div className="card col-12 col-md-4 p-2 rounded " >
          <img src={icon2} alt="" className='w-100 rounded '  />
          <div className="layer rounded d-flex justify-content-center align-items-center ">
          <i class="fa-solid fa-plus text-light fs-1 "></i>
        
          </div>
  </div>
       <div className="card col-12 col-md-4 p-2 rounded " >
          <img src={icon3} alt="" className='w-100 rounded '  />
          <div className="layer rounded d-flex justify-content-center align-items-center ">
          <i class="fa-solid fa-plus text-light fs-1 "></i>
        
          </div>
  </div>
       <div className="card col-12 col-md-4 p-2 rounded " >
          <img src={icon1} alt="" className='w-100 rounded '  />
          <div className="layer rounded d-flex justify-content-center align-items-center ">
          <i class="fa-solid fa-plus text-light fs-1 "></i>
        
          </div>
  </div>
       <div className="card col-12 col-md-4 p-2 rounded " >
          <img src={icon2} alt="" className='w-100 rounded '  />
          <div className="layer rounded d-flex justify-content-center align-items-center ">
          <i class="fa-solid fa-plus text-light fs-1 "></i>
        
          </div>
  </div>
       <div className="card col-12 col-md-4 p-2 rounded " >
          <img src={icon3} alt="" className='w-100 rounded '  />
          <div className="layer rounded d-flex justify-content-center align-items-center ">
          <i class="fa-solid fa-plus text-light fs-1 "></i>
        
          </div>
  </div>
     

   
  
        </div>
      </div>



    </div>
    </div>
  
  )
}
