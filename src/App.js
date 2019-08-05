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
  render(){
  return (
    <div className="App">
      <Header></Header>
    <Container>
      <Products/>
      <ButtonBases/>

      </Container>
      </div>
  );
  }
}

export default App;
