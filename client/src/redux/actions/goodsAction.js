import { ALL_CATEGORIES, ALL_GOODS, CHANGE_FLAG_DELIVERY } from "../types/goods"


export const showAllGoodsThunk = () => async (dispatch, getState) => {
  const response = await fetch('http://localhost:3001/api/goods')
  const serverResponse = await response.json()
  dispatch(showAllGoods(serverResponse))
}


export const showAllGoods = (goods) => ({
  type: ALL_GOODS,
  payload: goods
})


export const showAllCategoriesThunk = () => async (dispatch, getState) => {
  const response = await fetch('http://localhost:3001/api/categories')
  const serverResponse = await response.json()
  dispatch(showAllCategories(serverResponse))
}


export const showAllCategories = (category) => ({
  type: ALL_CATEGORIES,
  payload: category
})


export const changeFlagDelivery = (flag) => ({
  type: CHANGE_FLAG_DELIVERY,
  payload: flag
})
