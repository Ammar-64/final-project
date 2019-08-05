import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from './ShoppingCart'
import Products from './Products';
import Header from './Header'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Header></Header>
      <Products/>
    </div>
  );
  }
}

export default App;
