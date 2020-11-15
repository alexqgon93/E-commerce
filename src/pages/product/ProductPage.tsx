import { Button, Card, CircularProgress } from '@material-ui/core';
import React, { ReactElement, useContext } from 'react';
import { useQuery } from 'react-query';
import { Products } from '../../components/types';
import { getProductById } from '../../services/products.service';
import { useParams } from 'react-router-dom';
import useStyles from './ProductStyles';
import { AddShoppingCart } from '@material-ui/icons';
import formatter from '../../utils/formatter';
import { CartContext } from '../../components/core/context/storeContexts/cartContext';

const ProductPage = (): ReactElement => {
  const classes = useStyles();
  const { id } = useParams();
  const idNumber = parseInt(id);
  const { isLoading, isError, error, data } = useQuery<Products>('getAllProducts', async () =>
    getProductById(idNumber)
  );
  const isInCart = (product: { id: any }) => {
    return !!cartItems.find((item: { id: any }) => item.id === product.id);
  };

  const { addProduct, cartItems, increase } = useContext(CartContext);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.titlePage}>
        <h1>Información detallada del producto</h1>
      </div>
      <div className={classes.rowCart}>
        <div className={classes.columnCartItems}>
          <Card raised>
            <img alt={data?.name} src={'http://local.api.localhost' + data?.picture} className={classes.image} />
          </Card>
        </div>
        <Card raised className={classes.cart}>
          <div className={classes.card}>
            <h1>{data?.name}</h1>
            <h2>Precio del producto</h2>
            <h3>{data && formatter(data?.price)}</h3>
            <h2>Descripcion del producto</h2>
            <p>{data?.description}</p>
            {data && !isInCart(data) && (
              <Button startIcon={<AddShoppingCart />} onClick={() => addProduct(data)}>
                Añadir al carrito
              </Button>
            )}
            {data && isInCart(data) && (
              <Button startIcon={<AddShoppingCart />} onClick={() => increase(data)}>
                Añadir más
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductPage;
