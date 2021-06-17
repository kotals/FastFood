import React from 'react'
import style from './Good.module.css'
const Good = ({ info }) => {

  


  return (
    <>

      <div className={style.good}>
        <div style={{position:'relative'}}>
        <div >
          <img className={style.img_item} height='151px' width='192px' src="https://s82079.cdn.ngenix.net/330x0/YQFxnHqxG8uJzocESMTikaio.png" alt="бургер" />
        </div>
        <div className={style.iconBuy} ><span>+</span></div>

        </div>
        
        <div style={{margin:'30px 0 10px 0'}}>
        {info.name}
        </div>
        <div>
          {info.price}  &#8381;
        </div>
       
      </div>

    </>
  )
}

export default Good
