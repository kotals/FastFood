import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Main.module.css'
import { changeFlagDelivery, showAllCategoriesThunk, showAllGoodsThunk } from '../../redux/actions/goodsAction';
import Category from '../Category/Category';



const Main = () => {

  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)
  console.log(categories);
  useEffect(() => {
    dispatch(showAllCategoriesThunk())
    dispatch(showAllGoodsThunk())
  }, [dispatch])

  const flag = useSelector(state => state.goods.delivery)

  const changeFlagTrue = () => {
    dispatch(changeFlagDelivery(true))
  }
  const changeFlagFalse = () => {
    dispatch(changeFlagDelivery(false))
  }

  return (
    <>
      <div className={style.container_main}>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '47px', marginTop: '110px' }}>
          <div className={style.cityDelivery} >Доставка г.Москва</div>
          <div >
            <button className={style.button_red} onClick={changeFlagFalse}>Доставка</button>
            <button className={style.button_light} onClick={changeFlagTrue}>Самовывоз</button>
          </div>
        </div>

        <div style={{ visibility: (flag ? 'hidden' : 'visible'), paddingBottom: '63px' }}>
          <form>
            <span className={style.address}>Улица</span>
            <input type="text" class="form-control" />
            <span style={{ marginLeft: '43px' }} className={style.address}>Дом</span>
            <input type="text" class="form-control" />
          </form>
        </div>
      </div>

      <nav className={style.nav} >
        {categories?.map(el => <span className={style.nav_link} key={el._id}><a href={`#${el.name}`}  > {el.name}</a> </span>)}
      </nav>

      <div className={style.container_category}>
        {categories?.map((el, index) => <Category i={index + 1} key={el._id} info={el} />)}
      </div>
    </>
  )
}

export default Main
  // .main - header{ position: -webkit - sticky; position: sticky; top: 0; }
