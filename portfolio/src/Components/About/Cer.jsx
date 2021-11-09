import React from 'react';
import "./About.css";
import CER from '../../IMG/cer 1.jpg';
// import CER02 from '../../IMG/cer2.jpg';
import CER03 from '../../IMG/cer03.jpg';

const Cer = () => {
  return (
    <>

      <h1 className="text-center"> Certificate's</h1><br />
      <div id="carouselExampleInterval"
        className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={CER} class="d-block w-50 h-20 mx-auto" alt="img" />
          </div>
          {/* <div className="carousel-item" data-bs-interval="2000">
            <img src={CER02} class="d-block w-50  h-20 mx-auto" alt="img" />
          </div> */}
          <div className="carousel-item">
            <img src={CER03} class="d-block w-50 h-20 mx-auto" alt="img" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden ">Next</span>
        </button>
      </div>
      <br />
    </>
  )
}

export default Cer;
