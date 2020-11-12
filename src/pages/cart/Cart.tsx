import { Button, Card, Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>Carrito</h1>
      </div>
      <Grid direction="row">
        <Grid direction="column">
          {cartItems.length > 0 ? <CartItem /> : <p>El carrito está vacio</p>}
          {checkOut && (
            <div>
              <p>Compra realizada con exito</p>
              <Button onClick={() => navigate('/')}>Continua comprando</Button>
            </div>
          )}
          {cartItems.length > 0 && (
            <Grid direction="column">
              <Card>
                <p>Productos</p>
                <h4>{itemCount}</h4>
                <p>Coste Total</p>
                <h3>{totalCost}</h3>
                <hr />
                <div>
                  <Button>Finalizar Compra</Button>
                  <Button>Borrar Contenido</Button>
                </div>
              </Card>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Button>Finalizar Compra</Button>
    </div>
  );
};

export default Cart;
