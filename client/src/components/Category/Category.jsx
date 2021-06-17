import React from 'react'
import GoodsList from '../GoodsList/GoodsList';
const Category = ({ info, i }) => {
  return (
    <>
      <div style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#F7F6F5', margin: '30px 0' }}>
      {/* <div style={{ backgroundColor: i % 2 === 0 ? '##F7F6F5' : '#a98307', margin: '30px 0',padding:'40px 0 32px 0'}}> */}
        <span style={{fontSize:'32px'}} >
          <a name={info.name}>{info.name}</a>
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}>
          {info?.products?.map((el, indx) => <GoodsList key={el} id={el} />)}
        </div>
      </div>
    </>
  )
}

export default Category

