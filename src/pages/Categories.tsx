import { CircularProgress } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Products } from '../components/types';
import { getProductById } from '../services/products.service';

const Categories = (): ReactElement => {
  const { id } = useParams();
  const idNumber = parseInt(id);
  const { isLoading, isError, data, error } = useQuery<Array<Products>>('getProductById', async () =>
    getProductById(idNumber)
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }
  return (
    <div>
      <h1>Pagina de categorias {id}</h1>
    </div>
  );
};

export default Categories;
