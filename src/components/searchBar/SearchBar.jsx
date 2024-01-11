import React from 'react'
import logo from '../../assets/Logo Icon.png'
import './SearchBar.css'
export default function SearchBar() {
  return (
    <section className='search-bar'>
       <div className='logo'>
        <img src={logo} alt="" />
        <h3>Comforty</h3>
       </div>
       
        <input type="search" className='form-control' placeholder='Search here'/>
       <div className='search-card'>
          <div className='d-flex gap-2 back-color'>
          <i className="bi bi-cart"></i> <span>card</span> 3
          </div>
          <div className='back-color'>
          <i class="bi bi-heart"></i>
          </div>
          <div className='back-color'>
          <i className="bi bi-person-lines-fill"></i>
          </div>
       </div>
    </section>
  )
}
