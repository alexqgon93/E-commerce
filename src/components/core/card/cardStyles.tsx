import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: '100%',
    backgroundColor: theme.palette.primary.main,
  },
  media: {
    height: '100%',
  },
  buttonCard: {
    bottom: 0,
  },
}));

export default useStyles;
