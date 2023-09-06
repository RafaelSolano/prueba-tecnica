import React from 'react'
import "./styles.css"
import { Badge } from '../Badget'
export const Card = (props) => {

  const {title, image, publishedAt, content, category, slug } =props
  
 
  return (
    <>
     <div className="card">
        <figure className="card__figure">
            <img className="card__img" src={image} alt={title}/>
        </figure>
        <div className='card__text-container'>
            <p className="card__date " >Olivia Rhy {publishedAt}</p>
            <div className="card__title_container">
                <h2 className="card__title" >{title}</h2>
                <p className="card__title-icon"> --7 </p>
            </div>
            
            <p className="card__description">{content}</p>
            <div className="card__badgets">
               <Badge text={category} color="pink"/>
               <Badge text={slug} color="indigo"/>
               <Badge text={slug} color="green"/>
            </div>

        </div>

    </div>
    
    </>
  )
}
