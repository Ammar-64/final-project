import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
        {title: "Food", 
         url: "https://us.123rf.com/450wm/nayyao/nayyao1808/nayyao180800090/111849252-burger-sandwich-and-french-fries-in-red-carton-box-colorful-isolated-vector-icon-in-flat-style-with-.jpg?ver=6",
         width: '30%',
         },
        {title: "BabyCare", 
        url:"https://us.123rf.com/450wm/juliakhimich/juliakhimich1807/juliakhimich180700025/105340686-baby-carriage-line-icon.jpg?ver=6",
        width: '30%', 
    },
        {title: "flower", 
        url: "https://st3.depositphotos.com/7316806/16760/v/1600/depositphotos_167600092-stock-illustration-vase-tulip-vector-red-flower.jpg",
        width: '30%',
    },
       {title: "grocery", 
         url: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-groceries-icon-png-image_3634214.jpg",
         width: '30%',
        },
        {title: "sweets", 
        url: "https://png.pngtree.com/element_pic/16/10/28/c2f24821a24e92cb3cbae71b9f14b69a.jpg",
        width: '30%', 
    },
        {title: "gifts", 
        url: "https://media.istockphoto.com/vectors/gift-box-lineal-color-illustration-vector-id884844420",
        width: '30%',
    },
       {title: "tech", 
         url: "https://st2.depositphotos.com/5689602/12248/v/950/depositphotos_122485078-stock-illustration-usb-cable-icon-flat-and.jpg",
         width: '30%',
        },
        {title: "drinks", 
        url: "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1097142/300/200/m1/fpnw/wm0/soda-with-straw-flat-icon-01-.jpg?1458314277&s=662212274ff9263009a9a7b952d07a2e",
        width: '30%',
    },
        {title: "toys", 
        url:"https://images.freeimages.com/images/premium/large-thumbs/4816/48163054-toy-car-flat-icon-with-long-shadow.jpg",
        width: '30%',
    },
      ]
 
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '70%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', 
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}