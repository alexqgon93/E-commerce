import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2, 2),
    backgroundColor: theme.palette.primary.main,
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  typography: {
    color: theme.palette.background.default,
  },
}));

export default useStyles;
