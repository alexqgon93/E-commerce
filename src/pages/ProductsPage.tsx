import { CircularProgress } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { Products } from '../components/types';
import { getAllProducts } from '../services/products.service';

const ProductsPage = (): ReactElement => {
  const { isLoading, isError, error, data } = useQuery<Array<Products>>('getAllProducts', async () => getAllProducts());

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }
  return (
    <div>
      <h1>Pagina de productos</h1>
      {console.log(data)}
    </div>
  );
};

export default ProductsPage;
