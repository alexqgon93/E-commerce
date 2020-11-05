import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './cardStyles';

const MediaCard = (prop: { title: string; description: string; picture: string }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={prop.picture} title={prop.title} />
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
        <Button size="small" color="primary">
          Show {prop.title} Products
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
