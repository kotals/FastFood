import { ALL_GOODS, CHANGE_FLAG_DELIVERY } from "../types/goods"

const goodReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case ALL_GOODS:
      return {
        ...state,
        allgoods: action.payload
      }

      case CHANGE_FLAG_DELIVERY:
        return {
          ...state,
          delivery: action.payload
        }


    default:
      return state
  }
}

export default goodReducer
