import React from 'react'
import GoodsList from '../GoodsList/GoodsList';
const Category = ({ info }) => {
  return (
    <>
      <div style={{ backgroundColor: 'green' }}>
        <a name={info.name}>{info.name}</a>

      </div>
      <div style={{ display: 'flex', flexWrap:'wrap', justifyContent: 'center',margin:'0 10px' }}>
        {info?.products?.map(el => <GoodsList key={el} id={el} />)}
      </div>
    </>
  )
}

export default Category

