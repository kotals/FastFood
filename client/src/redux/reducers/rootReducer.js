import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import goodReducer from './goodReducer'


const rootReducer = combineReducers({
  goods: goodReducer,
  categories: categoryReducer,
})

export default rootReducer
