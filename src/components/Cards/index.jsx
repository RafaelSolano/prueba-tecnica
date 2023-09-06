import React from 'react'
import "./styles.css"
import { Badge } from '../Badget'
export const Card = () => {
  return (
    <>
     <div className="card">
        <figure className="card__figure">
            <img className="card__img" src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        </figure>
        <div>
            <p className="card__date " >Olivia Rhy - 20 Jan 2022</p>
            <div className="card__title_container">
                <h2 className="card__title" >Ux review Presentations</h2>
                <p className="card__title-icon"> --7 </p>
            </div>
            
            <p className="card__description">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
            <div className="card__badgets">
               <Badge text="Design" color="pink"/>
               <Badge text="Developers" color="indigo"/>
            </div>

        </div>

    </div>
    
    </>
  )
}
