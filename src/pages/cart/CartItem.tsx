import { Card, Grid } from '@material-ui/core';
import React from 'react';
import { Products } from '../../components/types';
import useStyles from './CartStyles';

const CartItem = (cartItems: Products[]) => {
  const classes = useStyles();
  return (
    <div className={classes.outterContainer}>
      <Card>
        {cartItems.map((product) => (
          <Grid direction="row" className={classes.innerContainer}>
            <Grid direction="column" className={classes.imageContainer}>
              <img
                className={classes.imageContainer}
                alt={product.name}
                src={'http://local.api.localhost' + product.picture}
              />
            </Grid>
            <Grid direction="column" className={classes.productInfo}>
              <h5>{product.name}</h5>
              <p> Price: {product.price}</p>
            </Grid>
            <Grid direction="column" className={classes.productQuantity}>
              <p>Cantidad de producto: </p>
            </Grid>
            <Grid direction="column" className={classes.productActions}>
              <p>Buttons to add</p>
            </Grid>
          </Grid>
        ))}
      </Card>
    </div>
  );
};

export default CartItem;
