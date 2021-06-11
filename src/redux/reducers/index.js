import {combineReducers} from 'redux';
import posts from './posts';
import news from './news';
import foodcorts from './foodcorts';

const rootReducer= combineReducers({
  posts,
  foodcorts,
  news
})

export default rootReducer;