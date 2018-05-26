import { combineReducers } from 'redux'

import { foods } from './Food'
import { foodCategories } from './FoodCategories'

const Application  = combineReducers({
  foodCategories,
  foods
})

export default Application
