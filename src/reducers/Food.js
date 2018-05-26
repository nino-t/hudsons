import { constFood } from '../constants'

export function foods(state = [], action) {
  switch (action.type) {
    case constFood.GET_LIST:
      return action.foods

    default:
      return state
  }
}
