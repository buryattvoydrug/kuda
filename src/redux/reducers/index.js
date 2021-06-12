import {combineReducers} from 'redux';
import posts from './posts';
import news from './news';
import random from './random';
import foodcorts from './foodcorts';

const rootReducer= combineReducers({
  posts,
  foodcorts,
  news,
  random
})

export default rootReducer;