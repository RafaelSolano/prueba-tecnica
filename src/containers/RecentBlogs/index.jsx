import React from 'react'
import { Card } from '../../components/cards'

import  './styles.css'
  
const API = "https://jsonplaceholder.org/posts"
export const RecentBlogs = () => {

    

  
  
      
    
 
    
  return (
    <div>
        <h2 className="title-section" >Recent blog posts</h2>

    <div className='container-recent-blogs'>

         
      
    
    <div className="card-main">
       <figure className="card__figure">
           <img className="card__img" src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
       </figure>
       <div className='card__container-text'>
           <p className="card__date " >Olivia Rhy - 20 Jan 2022</p>
           <div className="card__title_container">
               <h2 className="card__title" >Ux review Presentations</h2>
               <p className="card__title-icon">-7</p>
           </div>
           
           <p className="card__description">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
           <div className="card__badgets">
               <p className="badge badge-design">Design</p>
               <p className=" badge badge-research" >Research</p>
               <p className="badge badge-presentation">Presentation</p>
           </div>

       </div>
    </div>
    <div className='container-recent__cards-vertical'>
    <div className="card-horizontal" >
       <figure className="card__figure">
           <img className="card__img" src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
       </figure>
       <div>
           <p className="card__date " >Olivia Rhy - 20 Jan 2022</p>
           <div className="card__title_container">
               <h2 className="card__title" >Ux review Presentations</h2>
               <p className="card__title-icon">-</p>
           </div>
           
           <p className="card__description">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
           <div className="card__badgets">
               <p className="badge badge-design">Design</p>
               <p className=" badge badge-research" >Research</p>
               <p className="badge badge-presentation">Presentation</p>
           </div>

       </div>
    </div>
    <div className="card-horizontal" >
       <figure className="card__figure">
           <img className="card__img" src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
       </figure>
       <div>
           <p className="card__date " >Olivia Rhy - 20 Jan 2022</p>
           <div className="card__title_container">
               <h2 className="card__title" >Ux review Presentations</h2>
               <p className="card__title-icon">-</p>
           </div>
           
           <p className="card__description">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
           <div className="card__badgets">
               <p className="badge badge-design">Design</p>
               <p className=" badge badge-research" >Research</p>
               <p className="badge badge-presentation">Presentation</p>
           </div>

       </div>
    </div>
        

    </div>
    
    </div>
    </div>
  )
}
