import { CircularProgress, Grid, GridSpacing } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import MediaCard from '../../components/core/card/card';
import * as Types from '../../components/types';
import useStyles from './CategoriesStyles';
import { getCategoryById } from '../../services/categories.service';
import { getProductByCategoryId } from '../../services/products.service';

const Categories = (): ReactElement => {
  const classes = useStyles();
  const [spacing] = React.useState<GridSpacing>(2);
  const { id } = useParams();
  const idNumber = parseInt(id);
  const {
    isLoading: isLoadingCategory,
    isError: isErrorCategory,
    data: dataCategory,
    error: errorMessageCategory,
  } = useQuery<Types.Categories>('getCategoryById', async () => getCategoryById(idNumber));
  const {
    isLoading: isLoadingProducts,
    isError: isErrorPoducts,
    data: dataProducts,
    error: errorMesssageProducts,
  } = useQuery<Array<Types.Products>>('getProductById', async () => getProductByCategoryId(idNumber));

  if (isLoadingProducts || isLoadingCategory) {
    return <CircularProgress />;
  }

  if (isErrorPoducts || isErrorCategory) {
    return <span>Error: {errorMessageCategory || errorMesssageProducts}</span>;
  }
  return (
    <div>
      <h1>{dataCategory?.name} Category</h1>
      <p>{dataCategory?.description}</p>

      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Grid container className={classes.container} spacing={spacing}>
            {dataProducts &&
              dataProducts.map((todo) => (
                <Grid key={todo.id}>
                  <MediaCard
                    title={todo.name}
                    description={todo.description}
                    picture={'http://local.api.localhost' + todo.picture}
                    id={todo.id}
                    action={'/product/'}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Categories;
