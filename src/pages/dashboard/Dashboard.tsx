import { Button, CircularProgress, Slide } from '@material-ui/core';
import React, { ReactElement } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useQuery } from 'react-query';
import { Categories, Products } from '../../components/types';
import { getAllCategories } from '../../services/categories.service';
import { getAllProducts } from '../../services/products.service';
import { useSwipeable } from 'react-swipeable';
import useStyles from './DashboardStyles';

function CarouselItem(props: any) {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => props.next(),
    onSwipedRight: () => props.prev(),
  });

  return props.display ? (
    <div {...swipeHandlers} className="CarouselItem">
      {props.animation === 'slide' ? (
        <Slide
          direction={props.active ? (props.isNext ? 'left' : 'right') : props.isNext ? 'right' : 'left'}
          in={props.active}
          timeout={props.timeout}
        >
          <div>{props.child}</div>
        </Slide>
      ) : (
        <div>{props.child}</div>
      )}
    </div>
  ) : null;
}
const Dashboard = (): ReactElement => {
  const classes = useStyles();
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

  const handleClicOnCategory = (id: React.Key) => {
    window.location.replace('/categories/' + id);
  };

  const handleClickOnProduct = (id: React.Key) => {
    window.location.replace('/products/' + id);
  };

  return (
    <div>
      <h1>Seccion de Productos Destacados</h1>
      <Carousel>
        {dataProducts &&
          dataProducts.map((item, i) => (
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              key={i}
            />
          ))}
      </Carousel>
      <div className={classes.sectionCategories}>
        <h1>Categories</h1>
      </div>
      {dataCategories &&
        dataCategories.map((todo) => (
          <dl key={todo.id}>
            <dt>{todo.name}</dt>
            <dd>{todo.description}</dd>
            <Button title="get it" onClick={() => handleClicOnCategory(todo.id)}>
              Click me
            </Button>
          </dl>
        ))}
    </div>
  );
};

export default Dashboard;
