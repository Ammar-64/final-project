import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableFooter from '@material-ui/core/TableFooter';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));




const CheckoutProcess = (props) =>{

  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const [tab3Disable, setTab3Disable] = React.useState(true);

  function handleTab3DisableChange(event, newValue) {
    setTab3Disable(tab3Disable => newValue);
  }

  const [Tab2values, setTab2Values] = useState({name:"", 
  phone: "",
  city: "",
  neighborhood: "",
  street: "",
  building: "",
  apartment: "",
  });
  
  const handleTab2ValuesChange = event => {
    setTab2Values(
      {...Tab2values,
        [event.target.id]: event.target.value
      }
    
    ); 

    if(event.target.value == "")
      handleTab3DisableChange(event, true)
    else{
      let count = 0;
      for (var key in Tab2values) {
        debugger
          if(Tab2values[key] != "" && key != event.target.id)
            count += 1;
      }
      debugger
      if(count == 6)
        handleTab3DisableChange(event, false)
    }
  };

  let cartItems = props.orderList;
  let subtotal = 0;
  
  cartItems= cartItems.map(product => {
  subtotal += (product.props.quantity * product.props.price)
    return (
      <TableRow>
          <TableCell><img height="42" width="42" src={product.props.imageURL} /></TableCell>
          <TableCell>{product.props.title}</TableCell>
          <TableCell>{product.props.quantity}</TableCell>
          <TableCell>{product.props.price}</TableCell>
          <TableCell>{parseInt(product.props.quantity) * parseFloat(product.props.price)} tl</TableCell>
      </TableRow>
           );
    });
    
  let view;
  if (cartItems.length <= 0) {
    view = <h4>Your cart is empty</h4>;
  } else {
    view = cartItems;
  }
    
  let deliveryChargePercentage = subtotal > 100 ? 10 : 30;
  let deliveryCharge = (subtotal * deliveryChargePercentage)/100; 
  let total = deliveryCharge + subtotal;
  const labelRef = React.useRef(null);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs  value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab value="one" label="Order List" wrapped {...a11yProps('one')}/>
          <Tab value="two" label="Personal Information" wrapped {...a11yProps('two')} />
          <Tab value="three" label="Confirm order" wrapped {...a11yProps('three')} disabled={tab3Disable} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
       <Paper>
           <Table>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>Product</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Total</TableCell>
            </TableRow>
            <TableBody>
            {view}
                <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2}>Subtotal</TableCell>
                    <TableCell align="left">{subtotal} tl</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Delivery charge</TableCell>
                    <TableCell align="left">{`${deliveryChargePercentage} %`}</TableCell>
                    <TableCell align="left">{deliveryCharge} tl</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell align="left">{total} tl</TableCell>
                </TableRow>
                </TableBody>
           </Table>
           <Typography variant="body2" gutterBottom>If you buy more than 100 tl, delivery charge will be 10%</Typography>
       </Paper>
      </TabPanel>
      <TabPanel value={value} index="two">
        <Paper>
        <Grid
        container
        spacing={3}>
            <Grid item xs={3}>
              <TextField
                required
                id="name"
                label="Name"
                value={Tab2values.name}
                margin="normal"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleTab2ValuesChange}
              />
              <TextField
                required
                id="phone"
                label="Phone"
                margin="normal"
                value={Tab2values.phone}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleTab2ValuesChange}
              />
            </Grid>
            <Grid item xs={3}>
            <TextField
                required
                id="city"
                label="City"
                margin="normal"
                value={Tab2values.city}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleTab2ValuesChange}
              />
              <TextField
                required
                id="neighborhood"
                label="Neighborhood"
                margin="normal"
                value={Tab2values.neighborhood}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleTab2ValuesChange}
              />
              <TextField
                required
                id="street"
                label="Street"
                margin="normal"
                value={Tab2values.street}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleTab2ValuesChange}
              />
              <TextField
                required
                id="building"
                label="Building"
                margin="normal"
                value={Tab2values.building}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleTab2ValuesChange}
              />
              <TextField
                required
                id="apartment"
                label="Apartment"
                margin="normal"
                value={Tab2values.apartment}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleTab2ValuesChange}
              />
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="date"
                margin="normal"
                type="date"
                label="Date"
                value={Tab2values.date}
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
                onChange={handleTab2ValuesChange}
              />
              <TextField
                id="time"
                margin="normal"
                type="time"
                label="Time"
                value={Tab2values.time}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleTab2ValuesChange}
              />
              <TextField
                id="standard-read-only-input"
                label="Note"
                multiline
                defaultValue="if you want your order now, do not enter date and time"
                className={classes.textField}
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
        </Grid>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index="three">
        <paper>
          <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch">
            <Grid item>
              <Typography variant="h6">
                The total amout : {total} tl
              </Typography>
            </Grid>
            <Grid item>
            <Typography variant="h6">
                {Tab2values.name} , Tel: {Tab2values.phone}
              </Typography>
              <Typography variant="h6">
                Your address : {Tab2values.neighborhood} mahellesi, {Tab2values.street} caddesi, 
              </Typography>
              <Typography variant="h6">
                {Tab2values.building} evler, daire {Tab2values.apartment}, {Tab2values.city} city, Turkey
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">Place order</Button>
            </Grid>
          </Grid>
        </paper>
      </TabPanel>
    </div>
  );
}

export default CheckoutProcess;