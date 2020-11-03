import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

const Categories = (): ReactElement => {
  let { id } = useParams();
  return (
    <div>
      <h1>Pagina de categorias {id}</h1>
    </div>
  );
};

export default Categories;
