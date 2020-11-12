import { Button, Card, CircularProgress } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { Products } from '../../components/types';
import { getProductById } from '../../services/products.service';
import { useParams } from 'react-router-dom';
import useStyles from './ProductStyles';
import { AddShoppingCart } from '@material-ui/icons';

const ProductPage = (): ReactElement => {
  const classes = useStyles();
  const { id } = useParams();
  const idNumber = parseInt(id);
  const { isLoading, isError, error, data } = useQuery<Products>('getAllProducts', async () =>
    getProductById(idNumber)
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.divLeft}>
        <Card raised>
          <img alt={data?.name} src={'http://local.api.localhost' + data?.picture} />
        </Card>
      </div>
      <div className={classes.divRight}>
        <Card raised>
          <div className={classes.card}>
            <h1>{data?.name}</h1>
            <h2>Price of product:</h2>
            <h2>{data?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '€'}</h2>
            <p>{data?.description}</p>
            <Button size="medium" variant="contained" startIcon={<AddShoppingCart />}>
              Add to card
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductPage;
