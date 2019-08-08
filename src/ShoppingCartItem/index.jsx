import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from '../styles.module.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Counter from '../Counter';
import DeleteIcon from '@material-ui/icons/Delete';

class Product extends React.Component{

    state = {
        selectedProduct: {},
        isAdded: true,
      };

    removeFromCart(name) {
        this.setState(
        {
            selectedProduct: {
            title: name,
            }
        },
        function() {
            this.props.removeFromCart(this.state.selectedProduct);
        }
        );
        this.setState(
        {
            isAdded: false
        }
        );
    }


    render(){
        let totalPrice = parseInt(this.props.quantity) * parseFloat(this.props.price);
        return (
                <Box align="center" className={styles.cartItem}>
                    <Box> 
                    <img src={this.props.imageURL} height="42" width="42"/>
                    </Box>
                    <Box>
                    <Typography variant="h5" component="h5">
                        {this.props.title}
                    </Typography>
                    </Box>
                    <Box>
                    <Typography variant="body2" component="h6">
                        Quantity : {this.props.quantity}
                    </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price : {this.props.price}
                    </Typography> 
                    <Typography variant="body2" color="textSecondary" component="p">
                        Total price : {totalPrice}
                    </Typography>
                    <a href="#" onClick={this.removeFromCart.bind(this,this.props.title)}>
                    <DeleteIcon/></a>            
                </Box>
        )
    }
}

export default Product;