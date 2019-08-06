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
import { MDBBtn } from "mdbreact";

class Product extends React.Component{
    state = {
        selectedProduct: {},
        isAdded: false,
        quantity: 1
      };


      increment() {
        this.setState((state) => {
            return {quantity: state.quantity + 1};
          });
      }
    
      decrement() {
        if (this.state.quantity <= 1) {
          return this.state.quantity;
        } else {
            this.setState((state) => {
                return {quantity: state.quantity - 1};
              });
        }
      }

      addToCart(image, name, price, quantity) {
        this.setState(
        {
            selectedProduct: {
            image: image,
            title: name,
            price: price,
            Quantity: quantity
            }
        },
        function() {
            this.props.addToCart(this.state.selectedProduct);
        }
        );
        this.setState(
        {
            isAdded: true
        }
        );
    }

    render(){
        return (
                <Card align="left" className={styles.cardSection}>
                    <Box>  
                    <CardMedia 
                        className={styles.media}
                        image= {this.props.imageURL}
                        title= {this.props.title}/>
                    </Box>
                    <Box>
                    <CardContent>
                        <Typography variant="h5" component="h5">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.details}
                        </Typography>
                        <Typography variant="h6" component="h6">
                            {this.props.price} tl
                        </Typography>
                    </CardContent>
                    </Box>
                    <Box>
                    <CardActions className={styles.actionsSection}>
                        <Counter 
                         quantity={this.state.quantity}
                         incrementQuantity={this.increment.bind(this)}
                         decrementQuantity={this.decrement.bind(this)}/>
                        <Button variant="contained" color="secondary" onClick={this.addToCart.bind(
                                this,
                                this.props.imageURL,
                                this.props.title,
                                this.props.price,
                                this.state.quantity
                                )}>
                            Add to cart
                        </Button>                      
                    </CardActions>
                    </Box>            
                </Card>
        )
    }
}

export default Product;