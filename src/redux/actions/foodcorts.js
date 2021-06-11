import axios from 'axios';

export const setLoaded=(payload)=>({
  type:'SET_LOADED',
  payload,
})
export const fetchFoodcorts=()=>(dispatch)=>{
  const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
  dispatch(setLoaded(false));
  axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/foodcorts`).then(({data})=>{
      dispatch(setFoodcorts(data));
    });

}
export const setFoodcorts =(items)=>({
  type:'SET_FOODCORTS',
  payload:items,
});
export const setVisibleFoodcorts =(visible)=>({
  type:'SET_VISIBLE_FOODCORTS',
  payload:visible,
});
