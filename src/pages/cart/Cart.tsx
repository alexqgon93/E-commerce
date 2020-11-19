import { Button, Card } from '@material-ui/core';
import React, { ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../components/core/context/storeContexts/cartContext';
import formatter from '../../utils/formatter';
import CartItem from './CartItem';
import useStyles from './CartStyles';

const Cart = (): ReactElement => {
  const { total, cartItems, itemCount, clearCart } = useContext(CartContext);
  const classes = useStyles();
  const navigate = useNavigate();
  const checkOut = false;

  const handleCheckOut = () => {
    navigate('/checkout');
  };

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
            <h2 className={classes.infoCartEmpty}>El carrito está vacio</h2>
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
              <p className={classes.productParraf}>Total de Productos</p>
              <h4 className={classes.productInfoQuantity}>{itemCount}</h4>
              <p className={classes.productParraf}>Coste Total</p>
              <h3 className={classes.header3}>{formatter(total)}</h3>
              <hr className={classes.jumpLine} />
              <div className={classes.buttons}>
                <Button variant="contained" onClick={handleCheckOut}>
                  Finalizar Compra
                </Button>
                <Button variant="outlined" color="secondary" onClick={clearCart}>
                  Borrar Carrito
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
