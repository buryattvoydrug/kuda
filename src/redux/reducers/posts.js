const initialState={
  posts:[],
  visiblePosts: 9,
  isLoaded:false
}

const posts=(state=initialState,action)=>{
  switch (action.type) {
    case 'SET_POSTS':
      return{
        ...state,
        posts:action.payload,

        isLoaded:true
      };
    case 'SET_LOADED':
      return{
        ...state,
        isLoaded:action.payload
      };
    case 'SET_VISIBLE':
      return{
        ...state,
        visiblePosts: state.visiblePosts + 9
      }
    default:
      return state;
  }
  
}
export default posts;