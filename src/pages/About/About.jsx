import React from "react";

export default function About() {
  return (
    <div className="container-fluid m-auto vh-100 co">
      <div className="inner d-flex  flex-column justify-content-center align-items-center h-100">
        <h1 className="align-self-center">ABOUT COMPONENT</h1>
        <div className="starStyle d-flex justify-content-center align-items-center mt-3 fw-bolder">
          <span className="decoration"></span>
          <i class="fa-solid fa-star text-light"></i>
          <span className="decoration"></span>
        </div>






        
        <div className="row text-center w-50 ">
          <div className="col-12 col-md-6 my-4 text-light fw-bold ">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div> 
          <div className="col-12 col-md-6   my-4  text-light fw-bold ">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
