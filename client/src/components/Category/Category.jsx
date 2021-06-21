import React from 'react'
import GoodsList from '../GoodsList/GoodsList';
const Category = ({ info, i }) => {
  
  return (
    <>
      <div style={{ margin: '30px 0'}} >
        <div style={{  backgroundColor: i % 2 === 0 ? '#ffffff' : '#F7F6F5' }}>
        <div style={{margin:'0 96px',paddingTop:'40px'}}>
        <span style={{ fontSize: '32px' }} >
          <a name={info.name}>{info.name}</a>
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}>
          {info?.products?.map((el, indx) => <GoodsList key={el} id={el} />)}
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Category

