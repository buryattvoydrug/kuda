// export const addPizzaToCart=(pizzaObj)=>({
//   type:'ADD_PIZZA_CART',
//   payload:pizzaObj

import cart from "../reducers/cart";
import store from "../store";

// })
export const clearCart=()=>({
  type:'CLEAR_CART',
})
// export const removeCartItem=(id)=>({
//   type:'REMOVE_CART_ITEM',
//   payload:id
// })


export const plusItem=(id)=>({
  type:'PLUS_CART_ITEM',
  payload:id
})
export const minusItem=(id)=>({
  type:'MINUS_CART_ITEM',
  payload:id
})
export const addPizzaToCart = (product) => (dispatch, getState) => {
  const itemsCart = store.getState().cart.itemsCart.slice();
  let alreadyExists = false;
  itemsCart.forEach((x) => {
    if (x.id === product.id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    itemsCart.push({ ...product, count: 1 });
  }
  // console.log(itemsCart)
  store.dispatch({
    type: 'ADD_PIZZA_CART',
    payload: {itemsCart},
  });
  localStorage.setItem("itemsCart", JSON.stringify(itemsCart));
};

export const removeCartItem = (product) => (dispatch, getState) => {
  const itemsCart = store.getState()
    .cart.itemsCart.slice()
    .filter((x) => x.id !== product.id);
    store.dispatch({ type: 'REMOVE_CART_ITEM', payload: {itemsCart} });
  localStorage.setItem("itemsCart", JSON.stringify(itemsCart));
};
