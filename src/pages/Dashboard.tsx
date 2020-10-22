import { CircularProgress } from '@material-ui/core';
import React, { ReactElement } from 'react';
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
  } = useQuery<Array<Products>>('getAllCategories', async () => getAllProducts());

  if (loadingCategories || loadingProducts) {
    return <CircularProgress />;
  }

  if (errorCategories || errorProducts) {
    return <span>Error: {errorMessageCategories || errorMessageProducts}</span>;
  }

  if (dataCategories && dataProducts) {
    return (
      <div>
        <h1>Sección de Categorias</h1>
        {dataCategories.map((todo) => (
          <dl key={todo.id}>
            <dt>{todo.name}</dt>
            <dd>{todo.description}</dd>
          </dl>
        ))}
        <h1>Seccion de Productos</h1>
        {console.log(dataProducts)}
        {dataProducts.map((item) => (
          <dl key={item.id}>
            <dt>{item.name}</dt>
            <dd>{item.description}</dd>
          </dl>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1>Pagina de bienvenida</h1>
      <h1>There is nothing to show</h1>
    </div>
  );
};

export default Dashboard;
