import { Card, CardMedia, CircularProgress, Grid, GridSpacing, Link, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useQuery } from 'react-query';
import { Categories, Products } from '../../components/types';
import { getAllCategories } from '../../services/categories.service';
import { getFeaturedProducts } from '../../services/products.service';
import useStyles from './DashboardStyles';
import MediaCard from '../../components/core/card/card';

const Dashboard = (): ReactElement => {
  const classes = useStyles();
  const [spacing] = React.useState<GridSpacing>(2);
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
  } = useQuery<Array<Products>>('getFeaturedProducts', async () => getFeaturedProducts());

  if (loadingCategories || loadingProducts) {
    return <CircularProgress />;
  }

  if (errorCategories || errorProducts) {
    return <span>Error: {errorMessageCategories || errorMessageProducts}</span>;
  }

  const handleClickOnCarousel = (id: React.Key) => {
    window.location.replace('/product/' + id);
  };

  return (
    <div>
      <h1 className={classes.h1}>Productos Destacados del Mes</h1>
      <Carousel>
        {dataProducts &&
          dataProducts.map((item, i) => (
            <Card raised className={classes.carousel} key={item.id}>
              <Link onClick={() => handleClickOnCarousel(item.id)}>
                <CardMedia
                  className={classes.media}
                  image="https://fotos00.formulamoto.es/2019/11/12/1024x341/honda-cbr1000rr-fireblade.jpg"
                  title={item.name}
                >
                  <Typography gutterBottom variant="h1" component="h2" className={classes.ty}>
                    {item.name}
                  </Typography>
                </CardMedia>
              </Link>
            </Card>
          ))}
      </Carousel>
      <div className={classes.sectionCategories}>
        <h1>Categories</h1>
      </div>
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12}>
          <Grid container className={classes.container} spacing={spacing}>
            {dataCategories &&
              dataCategories.map((todo) => (
                <Grid key={todo.id}>
                  <MediaCard
                    title={todo.name}
                    description={todo.description}
                    picture="https://www.motorcyclecruiser.com/resizer/N5Zp2LstRAH0lCliJYBgM0ewZyU=/800x400/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/7OXROXB3BRUZYLHL2Q2KKU5NLA.jpg"
                    id={todo.id}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
