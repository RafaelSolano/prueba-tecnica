import "./styles.css"
export const Badge = ({text, color}) => {
    
  return (
    <>
     <p className={`badge  ${color}`}>{text}</p>
                
    </>
  )
}
