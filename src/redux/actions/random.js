import axios from 'axios';

export const setLoaded=(payload)=>({
  type:'SET_LOADED',
  payload,
})
export const fetchRandom=()=>(dispatch)=>{
  const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
  dispatch(setLoaded(false));
  axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/routes`).then(({data})=>{
      dispatch(setRoutes(data));
    });

}
export const setRoutes =(items)=>({
  type:'SET_ROUTES',
  payload:items,
});