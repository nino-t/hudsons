import { constFoodCategories } from '../constants'

export function foodCategories(state = [], action) {
  switch (action.type) {
    case constFoodCategories.GET_LIST:
      return action.food_categories

    default:
      return state
  }
}
