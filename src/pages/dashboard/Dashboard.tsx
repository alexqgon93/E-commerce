import { Button, CircularProgress, Grid, GridSpacing, Slide } from '@material-ui/core';
import React, { ReactElement } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useQuery } from 'react-query';
import { Categories, Products } from '../../components/types';
import { getAllCategories } from '../../services/categories.service';
import { getAllProducts } from '../../services/products.service';
import { useSwipeable } from 'react-swipeable';
import useStyles from './DashboardStyles';
import MediaCard from '../../components/core/card/card';

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
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
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
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container className={classes.container} spacing={spacing}>
            {dataCategories &&
              dataCategories.map((todo) => (
                <Grid key={todo.id}>
                  <MediaCard
                    title={todo.name}
                    description={todo.description}
                    picture={
                      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bennetts.co.uk%2Fbikesocial%2Fnews-and-views%2Ffeatures%2Fbikes%2Flightest-weight-motorcycles&psig=AOvVaw1riQUDcJgGcb0PjSyqBfQk&ust=1604595771317000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICX1puv6ewCFQAAAAAdAAAAABAD'
                    }
                  />
                  {/* <Button title="get it" onClick={() => handleClicOnCategory(todo.id)}>
                Click me
              </Button> */}
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
