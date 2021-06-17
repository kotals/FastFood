import { ALL_CATEGORIES} from "../types/goods"

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_CATEGORIES:
      return  action.payload
      
    default:
      return state
  }
}

export default categoryReducer
