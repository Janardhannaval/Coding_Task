import React from 'react'
import './VideoSectionStyle.css'
export default function VideoSection() {
  return (
   <div className='container'>
     <div className=' videoContainer'>
     <div className="row">
        <div className="col-lg-6">
        <iframe width="460" height="215" src="https://www.youtube.com/embed/-mJFZp84TIY?si=Tsf_VHzKfcSBEHEn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
        </div>
        <div className="col-lg-6">
          <div className='videoText'>
          <h3>What are You Waiting For ? Start it Today</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cum eaque iusto voluptatem repellendus dicta. Lorem ipsum dolor sit amet consectetur.</p>
         <button className='videoButton'>Find Out More</button>
          </div>
        </div>
     </div>
    </div>

    <div className='logoPartners'>
    <div className="row">
        <div className="col-lg-6">
        <h2>Beautiful Layouts</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, necessitatibus? Optio at esse reiciendis quod eveniet, doloribus consequuntur, incidunt vitae tenetur explicabo, voluptas excepturi iste temporibus voluptatibus dolore? Consequatur, eos!</p>
        </div>
        <div className="col-lg-6">
          <div className='logo'>
            <div className='firstLogo'>
                <img height={100} src="https://media.istockphoto.com/id/1094579572/vector/vector-3d-blue-office-building-icon.jpg?s=1024x1024&w=is&k=20&c=BOMfWMRQnwAFyaBlyCSO4v42kopkwyW0InOdw22482I=" alt="" />
                <img height={100} src="https://media.istockphoto.com/id/1094579572/vector/vector-3d-blue-office-building-icon.jpg?s=1024x1024&w=is&k=20&c=BOMfWMRQnwAFyaBlyCSO4v42kopkwyW0InOdw22482I=" alt="" />
                <img height={100} src="https://media.istockphoto.com/id/1094579572/vector/vector-3d-blue-office-building-icon.jpg?s=1024x1024&w=is&k=20&c=BOMfWMRQnwAFyaBlyCSO4v42kopkwyW0InOdw22482I=" alt="" />
            </div>
            <div className='firstLogo mt-3'>
                <img height={100} src="https://media.istockphoto.com/id/1094579572/vector/vector-3d-blue-office-building-icon.jpg?s=1024x1024&w=is&k=20&c=BOMfWMRQnwAFyaBlyCSO4v42kopkwyW0InOdw22482I=" alt="" />
                <img height={100} src="https://media.istockphoto.com/id/1094579572/vector/vector-3d-blue-office-building-icon.jpg?s=1024x1024&w=is&k=20&c=BOMfWMRQnwAFyaBlyCSO4v42kopkwyW0InOdw22482I=" alt="" />
                <img height={100} src="https://media.istockphoto.com/id/1094579572/vector/vector-3d-blue-office-building-icon.jpg?s=1024x1024&w=is&k=20&c=BOMfWMRQnwAFyaBlyCSO4v42kopkwyW0InOdw22482I=" alt="" />
            </div>
          </div>
        </div>
     </div>   
    </div>
   </div>
  )
}
