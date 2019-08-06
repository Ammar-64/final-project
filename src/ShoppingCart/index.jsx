import React, { Component } from "react";
// import CartScrollBar from "./CartScrollBar";
import EmptyCart from "../EmptyCart";
// import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { findDOMNode } from "react-dom";
import ShoppingCartItem from "../ShoppingCartItem";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import styles from '../styles.module.css';
import Button from '@material-ui/core/Button';


class ShoppingCart extends Component {

  render() {
    let cartItems = this.props.cartItems.map(product => {
      return (
        <ShoppingCartItem
        imageURL={product.image}
        title={product.title} 
        price={product.price}
        quantity={product.Quantity}
        removeFromCart={this.props.removeFromCart}/>
      );
    });
    let view;
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = cartItems;
    }
    return (
        <div className="container">

        <MDBPopover
          placement="bottom"
          popover
          clickable
          id="popper3">
          <MDBBtn>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
          </MDBBtn>
          <MDBContainer >
            <MDBPopoverBody className={styles.shoppingCart}>
              {view}
              <Button variant="contained" color="secondary">Proceed to checkout</Button>
            </MDBPopoverBody>
          </MDBContainer>
        </MDBPopover>
              
              {/* <CartScrollBar>{view}</CartScrollBar> */}
              {/* <div className="action-block">
                <button
                  type="button"
                  className={this.state.cart.length > 0 ? " " : "disabled"}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div> */}
            </div>
    );
  }
}

export default ShoppingCart;
