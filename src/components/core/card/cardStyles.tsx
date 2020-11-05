import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: theme.palette.secondary.light,
  },
  media: {
    height: 140,
  },
}));

export default useStyles;
