const initialState={
  places:[],
  routes:[],
  isLoadedPlaces:false,
  isLoadedRoutes:false,
  isLoaded:false
}

const random=(state=initialState,action)=>{
  switch (action.type) {
    case 'SET_PLACES':
      return{
        ...state,
        places:action.payload,
        isLoadedPlaces:true
      };
    case 'SET_ROUTES':
      return{
        ...state,
        routes:action.payload,
        isLoadedRoutes:true
      };
      
    case 'SET_LOADED':
      return{
        ...state,
        isLoaded:action.payload
      }
    default:
      return state;
  }
  
}
export default random;