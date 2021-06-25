import axios from 'axios';

export const setLoaded=(payload)=>({
  type:'SET_LOADED',
  payload,
})
export const fetchCorners=()=>(dispatch)=>{
  const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
  dispatch(setLoaded(false));
  axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/corners?per_page=100`).then(({data})=>{
      dispatch(setCorners(data));
    });

}
export const setCorners =(items)=>({
  type:'SET_CORNERS',
  payload:items,
});
export const setVisiblePosts =(visible)=>({
  type:'SET_VISIBLE',
  payload:visible,
});

