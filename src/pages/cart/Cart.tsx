import { Button, Card, CircularProgress } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Products } from '../../components/types';
import { getFeaturedProducts } from '../../services/products.service';
import CartItem from './CartItem';
import useStyles from './CartStyles';

const Cart = (): ReactElement => {
  const classes = useStyles();
  const navigate = useNavigate();
  const checkOut = false;
  const { isLoading, isError, data: cartItems, error } = useQuery<Array<Products>>('getFeaturedProducts', async () =>
    getFeaturedProducts()
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.titlePage}>
        <h1>Productos añadidos al Carrito</h1>
      </div>
      <div className={classes.rowCart}>
        <div className={classes.columnCartItems}>
          {cartItems && cartItems.length > 0 ? (
            <CartItem cartItems={cartItems} />
          ) : (
            <p className={classes.infoCartEmpty}>El carrito está vacio</p>
          )}
          {checkOut && (
            <div className={classes.checkout}>
              <p>Compra realizada con exito</p>
              <Button onClick={() => navigate('/')}>Continua comprando</Button>
            </div>
          )}
        </div>
        {cartItems && cartItems.length > 0 && (
          <div>
            <Card raised className={classes.cart}>
              <p className={classes.productParraf}>Productos</p>
              <h4 className={classes.productInfoQuantity}>productcartItems</h4>
              <p className={classes.productParraf}>Coste Total</p>
              <h3 className={classes.header3}>totalCost information</h3>
              <hr className={classes.jumpLine} />
              <div className={classes.buttons}>
                <Button variant="contained" color="primary">
                  Finalizar Compra
                </Button>
                <Button variant="outlined">Borrar Contenido</Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
