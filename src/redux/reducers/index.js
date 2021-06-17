import {combineReducers} from 'redux';
import posts from './posts';
import news from './news';
import random from './random';
import foodcorts from './foodcorts';
// import filters from './filters';

const rootReducer= combineReducers({
  // filters,
  posts,
  foodcorts,
  news,
  random
})

export default rootReducer;