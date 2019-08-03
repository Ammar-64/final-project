import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from '../styles.module.css'
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Counter from '../Counter';

class Product extends React.Component{
    componentDidMount(props){

    }

    increaseFavorite = () =>{
        this.setState({ favoriteCount: this.state.favoriteCount + 1});
    }

    render(){
        let quantity = this.props.quantity;
        let updateQuantity = this.props.updateQuantity;
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
                         Quantity={quantity}
                         UpdateQuantity={updateQuantity}/>
                        <Button variant="contained" color="secondary">
                            Add to cart
                        </Button>                      
                    </CardActions>
                    </Box>            
                </Card>
        )
    }
}

export default Product;