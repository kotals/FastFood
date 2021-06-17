import React from 'react'
import { useSelector } from 'react-redux'
import Good from '../Good/Good'

const GoodsList = ({ id }) => {
  const goods = useSelector(state => state.goods.allgoods)
  const delivery = useSelector(state => state.goods.delivery)
  
  return (
    <>
      {delivery
        ?
        <>
          {goods.map(el => id === el._id ? <Good key={el._id} info={el} /> : '')}
        </>
        :
        <>
          {goods.map(el => (id === el._id && el.delivery === true) ? <Good key={el._id} info={el} /> : '')}
        </>
      }
    </>
  )
}

export default GoodsList

