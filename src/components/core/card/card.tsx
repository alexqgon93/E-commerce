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
import { useNavigate } from 'react-router-dom';

const MediaCard = (prop: { title: string; description: string; picture: string; id: React.Key; action: string }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" alt={prop.title} className={classes.media} image={prop.picture} title={prop.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {prop.title}
          </Typography>
          <Typography variant="body2" component="p">
            {prop.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          variant="contained"
          className={classes.buttonCard}
          startIcon={<AddShoppingCart />}
          onClick={() => navigate(prop.action + prop.id)}
        >
          {prop.title}
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
