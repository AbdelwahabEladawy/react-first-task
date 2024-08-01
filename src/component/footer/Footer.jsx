import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid Footer-co navbar-fixed-bottom" >
      <div className="row h-100   ">
       
          <div className="col-12 col-md-4 text-light text-center my-5 ">
            <h2>Location</h2>
            <p>155 louran AboQuir</p>
            <p>Route Drive 6565</p>
          </div>

          <div className="col-12 col-md-4 text-light text-center my-5 ">
            <h2>Around The Web</h2>
            <div className="icons">
              <i class="fa-brands fa-facebook fs-2 p-2 mx-2 border border-1 rounded-circle"></i>
              <i class="fa-brands fa-instagram fs-2 p-2 mx-2  border border-1 rounded-circle"></i>
              <i class="fa-brands fa-twitter fs-2 p-2 mx-2  border border-1 rounded-circle"></i>
              <i class="fa-brands fa-pinterest fs-2 p-2 mx-2  border border-1 rounded-circle"></i>
            </div>
          </div>

          <div className="col-12 col-md-4 text-light text-center my-5 ">
            <h2>ABOUT FREELANCER</h2>
            <p >
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
      



        <p  className="text-center h2 text-light endSec d-flex justify-content-center align-items-center endText py-3">Copyright © Your Website 2021</p>
     
      </div>

    </div>
       
  );
}
