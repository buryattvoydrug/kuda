import React, { Component } from "react";
import { Dimensions } from "react-native";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { removeCartItem } from "../redux/actions/cart";
import CafeItem from "./CafeItem";

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

class Cart extends Component {
  

  render() {
    
    const { itemsCart } = this.props;
    return (
      <>
      {itemsCart.length && 
      
        
             itemsCart.map((item,index)=>(
            <CafeItem map={this.props.map}
              key={item.id} wide={isMobile? index%3===0: (index%9)%4===0} post={item}
                toDelete={() => this.props.removeCartItem(item)} isCart
              />
                  ))
            
      
      }
                  <CSSTransition
                    in={!itemsCart.length}
                    timeout={2000}
                    classNames="newstransition"
                    unmountOnExit
                  >
                      <div>
                      <div className="empty">
                      <img src="/images/empty.svg" alt=""/>

                      <h1 className="cart__title">Список пуст</h1>
                      <h3 className="cart__title">Сохраняйте <strong>понравившиеся</strong> места <strong>в избранное</strong></h3>
                      </div>
                      </div>
                    </CSSTransition>
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
