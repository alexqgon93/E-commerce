import { Card, Icon, IconButton } from '@material-ui/core';
import React, { useContext } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { ProductsCart } from '../../components/types';
import useStyles from './CartStyles';
import { CartContext } from '../../components/core/context/storeContexts/cartContext';
import formatter from '../../utils/formatter';

const CartItem = (props: { cartItems: Array<ProductsCart> }) => {
  const classes = useStyles();
  const { increase, removeProduct, decrease } = useContext(CartContext);
  return (
    <div className={classes.outterContainer}>
      <Card>
        {props.cartItems.map((product, i) => (
          <div key={i}>
            <div className={classes.imageContainer}>
              <img className={classes.image} alt={product.name} src={'http://local.api.localhost' + product.picture} />
            </div>
            <div className={classes.productInfo}>
              <h5>{product.name}</h5>
              <p> Price: {formatter(product.price)}</p>
            </div>
            <div className={classes.productQuantity}>
              <p>Cantidad de producto: {product.quantity}</p>
            </div>
            <div className={classes.productActions}>
              <IconButton>
                <Icon color="primary" onClick={() => increase(product)}>
                  add_circle
                </Icon>
              </IconButton>
              {product.quantity > 1 && (
                <IconButton>
                  <DeleteIcon color="primary" onClick={() => decrease(product)} />
                </IconButton>
              )}
              {product.quantity === 1 && (
                <IconButton>
                  <DeleteIcon color="primary" onClick={() => removeProduct(product)} />
                </IconButton>
              )}
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default CartItem;
