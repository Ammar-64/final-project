import React, { Component } from "react";
import EmptyCart from "../EmptyCart";
import ShoppingCartItem from "../ShoppingCartItem";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import styles from '../styles.module.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CheckoutProcess from '../CheckoutProcess';
import Badge from '@material-ui/core/Badge';



class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
        isDialogOpen: false
    }
  }

  openDialog = () => this.setState({ isDialogOpen: true })
 
  closeDialog = () => this.setState({ isDialogOpen: false })

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
    let showButton = false;
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = cartItems;
      showButton = true;
    }
    return (
        <div className={styles.shoppingCartButton}>

          <MDBPopover
            placement="bottom"
            popover
            clickable
            id="popper3">
            <Badge badgeContent={cartItems.length} color="primary">
              <MDBBtn>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </MDBBtn>
            </Badge>
            <MDBContainer >
              <MDBPopoverBody className={styles.shoppingCart}>
                {view}
                {showButton &&
                <Button variant="contained" color="secondary" onClick={this.openDialog}>Proceed to checkout</Button>}
              </MDBPopoverBody>
            </MDBContainer>
          </MDBPopover>
          {
          <Dialog
            maxWidth="lg"
            open={this.state.isDialogOpen}
            onClose={this.closeDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogActions>
              <a href="#" onClick={this.closeDialog} color="primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>								
              </a>
            </DialogActions>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <CheckoutProcess orderList={view}/>
              </DialogContentText>
            </DialogContent>

          </Dialog>
          }   
        </div>
    );
  }
}

export default ShoppingCart;
