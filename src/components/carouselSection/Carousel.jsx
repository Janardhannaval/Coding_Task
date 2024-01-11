import React from "react";
import bgShape from '../../assets/BG Shapes.png'
import productImage from '../../assets/Product Image.png'
import './Carousel.css'
export default function Carousel() {
  return (
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
      <div style={{background:"#F0F2F3" ,height:'600px'}} className="back-img" alt="...">
         <div className="text-of-carousel">
          <p>Welcome to chairy</p>
          <h1>Best Furniture Collection for your interior.</h1>
          <button className="button-shop-now">Shop Now</button>
         </div>
         <div>
          <img src={bgShape}  alt="" className="circle-img"/>
          <img src={productImage} alt="" className="chair-img" />
         </div>
      </div>
      </div>
     
     
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  );
}
