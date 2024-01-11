import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <section className='navbar-container'>  
       {/* <div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3" viewBox="0 0 18 3" fill="none">
<path d="M18 2.5H0V0.5H18V2.5Z" fill="#272343"/>
</svg> <span>All Categories</span>
          </div>
          <div>
             <ul>
                <li>Home</li>
                <li>s</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
             </ul>
          </div>
       </div> */}
       <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
     <div className='d-flex gap-5'>
      <div className='d-flex gap-2 pt-2'>
      <i class="bi bi-house h6"></i>
      <h5>All Categories</h5>
      </div>
      <div>
      <button class="navbar-toggler "  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" ></span>
      </button>
      </div>
     </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Pages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
      </ul>
      <div class="d-flex pt-3" >
          <span className='text-secondary'>Contact: </span> <p className='ps-2' > (808) 555-0111</p>
      </div>
    </div>
  </div>
</nav>
    </section>
  )
}
