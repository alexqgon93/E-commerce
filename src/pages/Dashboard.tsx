import { Button, CircularProgress, Paper } from '@material-ui/core';
import React, { ReactElement } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useQuery } from 'react-query';
import { Categories, Products } from '../components/types';
import { getAllCategories } from '../services/categories.service';
import { getAllProducts } from '../services/products.service';

const Dashboard = (): ReactElement => {
  const {
    isLoading: loadingCategories,
    isError: errorCategories,
    data: dataCategories,
    error: errorMessageCategories,
  } = useQuery<Array<Categories>>('getAllCategories', async () => getAllCategories());
  const {
    isLoading: loadingProducts,
    isError: errorProducts,
    data: dataProducts,
    error: errorMessageProducts,
  } = useQuery<Array<Products>>('getAllProducts', async () => getAllProducts());

  if (loadingCategories || loadingProducts) {
    return <CircularProgress />;
  }

  if (errorCategories || errorProducts) {
    return <span>Error: {errorMessageCategories || errorMessageProducts}</span>;
  }

  return (
    <div>
      <h1>Seccion de Productos Destacados</h1>
      <Carousel>
        {dataProducts &&
          dataProducts.map((item, i) => (
            <Paper key={i}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <Button className="CheckButton">Check it out!</Button>
            </Paper>
          ))}
      </Carousel>
      <h1>Categories</h1>
      {dataCategories &&
        dataCategories.map((todo) => (
          <dl key={todo.id}>
            <dt>{todo.name}</dt>
            <dd>{todo.description}</dd>
          </dl>
        ))}
    </div>
  );
};

export default Dashboard;
