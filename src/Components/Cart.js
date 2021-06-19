import React, { Component } from "react";
import { Dimensions } from "react-native";
import { connect } from "react-redux";
import { removeCartItem } from "../redux/actions/cart";
import CafeItem from "./CafeItem";

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

class Cart extends Component {

  render() {
    const { itemsCart } = this.props;
    console.log(itemsCart)
    return (
      <>
      {itemsCart.length? itemsCart.map((item,index)=>(
            <CafeItem 
              key={item.id} wide={isMobile? index%3===0: (index%9)%4===0} post={item}
                toDelete={() => this.props.removeCartItem(item)} isCart
              />
                  )):''}
      <div>
      </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    itemsCart: state.cart.itemsCart,
  }),
  { removeCartItem }
)(Cart);
