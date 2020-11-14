import { Button, Card, CircularProgress } from '@material-ui/core';
import React, { ReactElement, useContext } from 'react';
import { useQuery } from 'react-query';
import { Products } from '../../components/types';
import { getProductById } from '../../services/products.service';
import { useParams } from 'react-router-dom';
import useStyles from './ProductStyles';
import { AddShoppingCart } from '@material-ui/icons';
import { store } from '../../components/core/context/context/cartContext';
import { formatter } from '../../utils/formatter';
const ProductPage = (): ReactElement => {
  const classes = useStyles();
  const { id } = useParams();
  const idNumber = parseInt(id);
  const globalState = useContext(store);
  const { isLoading, isError, error, data } = useQuery<Products>('getAllProducts', async () =>
    getProductById(idNumber)
  );

  const productInCart = (product: any) => {
    return !!globalState.cartItems.find((item: { id: any }) => item.id === product.id);
  };

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
            <h3>{formatter(data?.price)}</h3>
            <h2>Descripcion del producto</h2>
            <p>{data?.description}</p>
            {!productInCart(data) && (
              <Button onClick={() => addProduct(product)} startIcon={<AddShoppingCart />}>
                Añadir al carrito
              </Button>
            )}
            {productInCart(data) && (
              <Button onClick={() => increase(product)} startIcon={<AddShoppingCart />}>
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
