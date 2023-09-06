import React, { cloneElement } from 'react'
import "./styles.css"
export const Badge = ({text, color}) => {
    console.log(text, color)
  return (
    <>
     <p className={`badge  ${color}`}>{text}</p>
                
    </>
  )
}
