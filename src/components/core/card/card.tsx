import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './cardStyles';
import { AddShoppingCart } from '@material-ui/icons';

const handleClicOnCategory = (id: React.Key) => {
  window.location.replace('/categories/' + id);
};

const MediaCard = (prop: { title: string; description: string; picture: string; id: React.Key }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" alt={prop.title} className={classes.media} image={prop.picture} title={prop.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {prop.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {prop.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          variant="outlined"
          color="inherit"
          startIcon={<AddShoppingCart />}
          onClick={() => handleClicOnCategory(prop.id)}
        >
          {prop.title} Products
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
