import React from 'react'
import './Home.css'

function Home() {
    return (
      <div className="home-container">
        {/* Mitad superior con el carrusel */}
        <div className="top-section">
          <div id="carouselContainer" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/public/media/photos/beatCreationPhoto.jpeg" className="d-block w-100" alt="beatStudioPhoto1" />
              </div>
              <div className="carousel-item">
                <img src="/public/media/photos/beatCreationPhoto2.jpeg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/public/media/photos/beatCreationPhoto3.jpeg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselContainer" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselContainer" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
  
        {/* Mitad inferior en rojo */}
        <div className="bottom-section">
          <p>holaaa</p>
        </div>
      </div>
    );
  }
  
  export default Home;