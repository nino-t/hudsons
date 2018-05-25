import { createStore } from "redux";
import reducer from "../reducers";

const initalState = {
  foodCategories: [
    {
      id: 1,
      group_name: 'Tsuki Studio',
      title: 'Hello World',
      favorite: false,
      color: '#ffaf05'
    },
    {
      id: 2,
      group_name: 'Destine Digital',
      title: 'Destine Digital HQ',
      favorite: true,
      color: '#ddd'
    }
  ]
}

const configureStore = createStore(reducer, initalState);
export default configureStore;
