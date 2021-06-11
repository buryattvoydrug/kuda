const initialState={
  news:[],
  visibleNews: 3,
  isLoaded:false
}

const news=(state=initialState,action)=>{
  switch (action.type) {
    case 'SET_NEWS':
      return{
        ...state,
        news:action.payload,

        isLoaded:true
      };
    case 'SET_LOADED':
      return{
        ...state,
        isLoaded:action.payload
      };
      case 'SET_VISIBLE_NEWS':
        return{
          ...state,
          visibleNews: state.visibleNews + 3
        }
    default:
      return state;
  }
  
}
export default news;