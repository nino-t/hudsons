import axios from 'axios'

import { appService } from '../config/serviceConfig'

export const foodService = {
  getByCategory
}

function getByCategory(category_id) {
	return axios.get(appService.BASE_URL+ '/foods?category_id='+ category_id)
		.then((response) => {
			return response.data
		})
		.catch((error) => {
			console.log(error);
		});
}