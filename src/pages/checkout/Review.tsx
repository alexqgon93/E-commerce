import React, { ReactElement, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import useStyles from './CheckOutStyles';
import { CartContext } from '../../components/core/context/storeContexts/cartContext';
import formatter from '../../utils/formatter';
import { ProductsCart } from '../../components/types';

const Review = (): ReactElement => {
  const classes = useStyles();
  const { total, cartItems } = useContext(CartContext);
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen de su pedido
      </Typography>
      <List disablePadding>
        {cartItems &&
          cartItems.map((product: ProductsCart, i: any) => (
            <ListItem className={classes.listItem} key={i}>
              <ListItemText primary={product.name} secondary={'Cantidad del producto: ' + product.quantity} />
              <Typography variant="body2" color="primary">
                {formatter(product.price)}
              </Typography>
            </ListItem>
          ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {formatter(total)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Dirección de envío
          </Typography>
          <Typography gutterBottom>{user.firstname + ' ' + user.lastname}</Typography>
          <Typography gutterBottom>{user.email}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Review;
