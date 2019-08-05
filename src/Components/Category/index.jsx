import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './styles.module.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';




class Category extends React.Component{
    


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
                    <CardActions className={styles.actionsSection}>
                        <Button variant="contained" color="warning">
                           {this.props.title}  List
                        </Button>                      
                    </CardActions>
                    </Box>            
                </Card>
        )
    }
}

export default Category;