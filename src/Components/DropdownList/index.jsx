import React from 'react';
import styles from './styles.module.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className={styles.dropdown} style = {{background:"red",width:"200px"}} >
         <div className={styles.button} onClick={this.showDropdownMenu}> Categories </div>

          { this.state.displayMenu ? (
          <ul>
         <li><a className={styles.active}  href="#Create Page">Create Page</a></li>
         <li><a href="#Manage Pages">Food</a></li>
         <li><a href="#Create Ads">Drinks</a></li>
         <li><a href="#Manage Ads">Grocery</a></li>
         <li><a href="#Activity Logs">Sweets</a></li>
         <li><a href="#Setting">BabyCare</a></li>
         <li><a href="#Log Out">Flowers</a></li>
         <li><a href="#Activity Logs">Gifts</a></li>
         <li><a href="#Setting">Tech</a></li>
         <li><a href="#Log Out">Toys</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;