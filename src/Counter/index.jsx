import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from '../styles.module.css'
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { debuggerStatement } from "@babel/types";

class Counter extends Component {
  constructor(props) {
    super(props);
    
    this.state = { value: this.props.Quantity };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((state) => {
        return {value: state.value + 1};
      });
  }

  decrement() {
    if (this.state.value <= 1) {
      return this.state.value;
    } else {
        this.setState((state) => {
            return {value: state.value - 1};
          });
    }
  }

  render() {
    return (
      <div className={styles.stepper_input}>
        <Button onClick={this.decrement}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg>
        </Button>
        {/* <a href="#" className={styles.decrement} onClick={this.decrement}>
          –
        </a> */}
        <input
          className={styles.quantity}
          value={this.state.value}
        />
        <Button onClick={this.increment}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>								
        </Button>
        {/* <a href="#" className={styles.increment} onClick={this.increment}>
          +
        </a> */}
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number
};

export default Counter;
