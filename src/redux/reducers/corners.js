const initialState={
  corners:[],
  isLoaded:false
}

const corners=(state=initialState,action)=>{
  switch (action.type) {
    case 'SET_CORNERS':
      return{
        ...state,
        corners:action.payload,
         isLoaded:true
      };
    case 'SET_LOADED':
      return{
        ...state,
        isLoaded:action.payload
      };
    default:
      return state;
  }
  
}
export default corners;