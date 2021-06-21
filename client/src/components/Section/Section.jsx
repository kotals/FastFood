 import React from 'react'
 import style from '../Footer/Footer.module.css'
 const Section = ({info}) => {
   return (
     <div >
       <div className={style.sectionTitle}>
       <h5>{info.title}</h5>
       </div>
       <div className={style.sectionText}>
       <p>{info.text}</p>
       <p>{info.text}</p>
       <p>{info.text}</p>
       <p>{info.text}</p>
       </div>

     </div>
   )
 }
 
 export default Section
 
