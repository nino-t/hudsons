import axios from 'axios'

import { appService } from '../config/serviceConfig'

export const foodCategoriesService = {
  getAll
}

function getAll() {
	return axios.get(appService.BASE_URL+ '/food-categories')
		.then((response) => {
			return response.data
		})
		.catch((error) => {
			console.log(error);
		});
}