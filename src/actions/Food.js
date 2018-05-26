import { constFood } from '../constants'
import { foodService } from '../services'

export const getByCategories = (category_id) => {
  return dispatch => {
    foodService.getByCategory(category_id)
      .then(foods => {
        dispatch(success(foods))
      },
      error => {
        console.log(error)
      })      
  }

  function success(foods) {
    return { 
      type: constFood.GET_LIST,
      foods
    }
  }
}