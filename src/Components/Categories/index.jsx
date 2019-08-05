import React from 'react';
import Grid from '@material-ui/core/Grid';
import Category from '../Category';

const Cards = [
  {title: "Food", 
   imageURL: "https://us.123rf.com/450wm/nayyao/nayyao1808/nayyao180800090/111849252-burger-sandwich-and-french-fries-in-red-carton-box-colorful-isolated-vector-icon-in-flat-style-with-.jpg?ver=6",
   
   },
  {title: "BabyCare", 
  imageURL:"https://us.123rf.com/450wm/juliakhimich/juliakhimich1807/juliakhimich180700025/105340686-baby-carriage-line-icon.jpg?ver=6",
    },
  {title: "flower", 
  imageURL: "https://st3.depositphotos.com/7316806/16760/v/1600/depositphotos_167600092-stock-illustration-vase-tulip-vector-red-flower.jpg",
 },
 {title: "grocery", 
   imageURL: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-groceries-icon-png-image_3634214.jpg",
   },
  {title: "sweets", 
  imageURL: "https://png.pngtree.com/element_pic/16/10/28/c2f24821a24e92cb3cbae71b9f14b69a.jpg",
    },
  {title: "gifts", 
  imageURL: "https://media.istockphoto.com/vectors/gift-box-lineal-color-illustration-vector-id884844420",
 },
 {title: "tech", 
   imageURL: "https://st2.depositphotos.com/5689602/12248/v/950/depositphotos_122485078-stock-illustration-usb-cable-icon-flat-and.jpg",
   },
  {title: "drinks", 
  imageURL: "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1097142/300/200/m1/fpnw/wm0/soda-with-straw-flat-icon-01-.jpg?1458314277&s=662212274ff9263009a9a7b952d07a2e",
    },
  {title: "toys", 
  imageURL:"https://images.freeimages.com/images/premium/large-thumbs/4816/48163054-toy-car-flat-icon-with-long-shadow.jpg",
 },
]


class Categories extends React.Component{
   
    render(){
        return (
          <div >
            <Grid
            container
            align="center"
            direction="row"
            justify ='center'
            alignItems="center"

            spacing={2}>
            {
              Cards.map(function(currentValue){
                  console.log(this);
                return (<Grid item xs={12} md={4}>
                  <Category
                  imageURL={currentValue.imageURL}
                  title={currentValue.title} 
                  />
                </Grid>)
              }.bind(this))
            }
          </Grid>
          </div>
        )
    }
}

export default Categories;