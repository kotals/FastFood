import React from 'react'

const Good = ({ info }) => {



  return (
    <>

      <div style={{ margin: '20px', width: '300px', height: '200px', backgroundColor: 'coral' }}>
        <div>
          название: {info.name}
        </div>
        <div>
          цена: {info.price}
        </div>
        <div>
         
          {
            info.delivery
              ?
              <span> Доставка</span>
              :
              <span> Только самовывоз</span>
          }
        </div>
        <hr />
      </div>

    </>
  )
}

export default Good
