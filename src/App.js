import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from './ShoppingCart'
import Products from './Products';
import Header from './Header'
import Categories from './Components/Categories';
import Container from './Components/Container';
import ButtonBases from './Components/Tests';
import Dropdown from './Components/DropdownList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      totalItems: 0,
      totalAmount: 0
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
  }

  addToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productTitle = selectedProducts.title;
    let productQty = selectedProducts.Quantity;
    if (this.checkProduct(productTitle)) {
      let index = cartItem.findIndex(x => x.title == productTitle);
      cartItem[index].Quantity =
        Number(cartItem[index].Quantity) + Number(productQty);
      // this.setState({
      //   cart: cartItem
      // });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem
    });

    

    // this.sumTotalItems(this.state.cart);
    // this.sumTotalAmount(this.state.cart);
  }

  removeFromCart(selectedProducts){
    debugger
    let cartItem = this.state.cart;
    let productTitle = selectedProducts.title;
    let index = cartItem.findIndex(x => x.title == productTitle);
    cartItem.splice(index,1);
    this.setState({
      cart: cartItem
    });

    // this.sumTotalItems(this.state.cart);
    // this.sumTotalAmount(this.state.cart);
  }

  checkProduct(productTitle) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.title === productTitle;
    });
  }

  // sumTotalItems() {
  //   let total = 0;
  //   let cart = this.state.cart;
  //   total = cart.length;
  //   this.setState({
  //     totalItems: total
  //   });
  // }
  
  // sumTotalAmount() {
  //   let total = 0;
  //   let cart = this.state.cart;
  //   for (var i = 0; i < cart.length; i++) {
  //     total += cart[i].price * parseInt(cart[i].quantity);
  //   }
  //   this.setState({
  //     totalAmount: total
  //   });
  // }

  render(){
  return (
    <div className="App">
      <ShoppingCart
      total={this.state.totalAmount}
      totalItems={this.state.totalItems}
      cartItems={this.state.cart}
      removeFromCart={this.removeFromCart}
      />
      <Products
      addToCart={this.addToCart}/>
    </div>
  );
  }
}

export default App;
