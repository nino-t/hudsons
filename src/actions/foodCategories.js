import { constFoodCategories } from '../constants'
import { foodCategoriesService } from '../services'

export const getAll = () => {
  return dispatch => {
    foodCategoriesService.getAll()
      .then(categories => {
        dispatch(success(categories))
      },
      error => {
        console.log(error)
      })      
  }

  function success(categories) {
    return { 
      type: constFoodCategories.GET_ALL,
      categories
    }
  }
}