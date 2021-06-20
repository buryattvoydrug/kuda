import axios from 'axios';

export const setLoaded=(payload)=>({
  type:'SET_LOADED',
  payload,
})
export const fetchCorners=()=>(dispatch)=>{
  const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
  dispatch(setLoaded(false));
  axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/corners`).then(({data})=>{
      dispatch(setPosts(data));
    });

}
export const setPosts =(items)=>({
  type:'SET_POSTS',
  payload:items,
});
export const setVisiblePosts =(visible)=>({
  type:'SET_VISIBLE',
  payload:visible,
});

