import {combineReducers} from 'redux';
import posts from './posts';
import corners from './corners';
import news from './news';
import cart from './cart';
import random from './random';
import foodcorts from './foodcorts';
// import filters from './filters';

const rootReducer= combineReducers({
  // filters,
  posts,
  corners,
  foodcorts,
  news,
  random,
  cart
})

export default rootReducer;