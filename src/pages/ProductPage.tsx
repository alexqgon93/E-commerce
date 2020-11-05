import { CircularProgress } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { Products } from '../components/types';
import { getAllProducts } from '../services/products.service';
import { useParams } from 'react-router-dom';

const ProductPage = (): ReactElement => {
  let { id } = useParams();
  const { isLoading, isError, error, data } = useQuery<Array<Products>>('getAllProducts', async () => getAllProducts());

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }
  return (
    <div>
      <h1>Pagina de productos {id}</h1>
      {data &&
        data.map((todo) => (
          <dl key={todo.id}>
            <dt>{todo.name}</dt>
            <dd>{todo.description}</dd>
          </dl>
        ))}
    </div>
  );
};

export default ProductPage;
