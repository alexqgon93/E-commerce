import { Card, Icon, IconButton } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Products } from '../../components/types';
import useStyles from './CartStyles';

const CartItem = (props: { cartItems: Array<Products> }) => {
  const classes = useStyles();
  return (
    <div className={classes.outterContainer}>
      <Card>
        {props.cartItems.map((product) => (
          <div>
            <div className={classes.imageContainer}>
              <img className={classes.image} alt={product.name} src={'http://local.api.localhost' + product.picture} />
            </div>
            <div className={classes.productInfo}>
              <h5>{product.name}</h5>
              <p> Price: {product.price} €</p>
            </div>
            <div className={classes.productQuantity}>
              <p>Cantidad de producto: </p>
            </div>
            <div className={classes.productActions}>
              <IconButton>
                <Icon color="primary">add_circle</Icon>
              </IconButton>
              <IconButton>
                <DeleteIcon color="primary" />
              </IconButton>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default CartItem;
