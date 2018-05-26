import { constFoodCategories } from '../constants'

export function foodCategories(state = [], action) {
  switch (action.type) {
    case constFoodCategories.GET_LIST:
      return action.categories

    default:
      return state
  }
}
