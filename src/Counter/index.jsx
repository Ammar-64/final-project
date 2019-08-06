import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from '../styles.module.css'
import { Button } from "@material-ui/core";

class Counter extends Component {

  render() {
    return (
      <div className={styles.stepper_input}>
        <Button onClick={this.props.decrementQuantity}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg>
        </Button>
        <input
          className={styles.quantity}
          value={this.props.quantity}
        />
        <Button onClick={this.props.incrementQuantity}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>								
        </Button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number
};

export default Counter;
