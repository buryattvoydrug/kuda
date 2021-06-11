const initialState={
  foodcorts:[],
  visibleFoodcorts: 3,
  isLoaded:false
}

const foodcorts=(state=initialState,action)=>{
  switch (action.type) {
    case 'SET_FOODCORTS':
      return{
        ...state,
        foodcorts:action.payload,

        isLoaded:true
      };
    case 'SET_LOADED':
      return{
        ...state,
        isLoaded:action.payload
      };
    case 'SET_VISIBLE_FOODCORTS':
      return{
        ...state,
        visibleFoodcorts: state.visibleFoodcorts + 3
      }
    default:
      return state;
  }
  
}
export default foodcorts;