import axios from 'axios';

export const setLoaded=(payload)=>({
  type:'SET_LOADED',
  payload,
})
export const fetchNews=()=>(dispatch)=>{
  const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
  dispatch(setLoaded(false));
  axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/news`).then(({data})=>{
      dispatch(setNews(data));
    });

}
export const setNews =(items)=>({
  type:'SET_NEWS',
  payload:items,
});
export const setVisibleNews =(visible)=>({
  type:'SET_VISIBLE_NEWS',
  payload:visible,
});