import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2, 2),
    marginBottom: 'auto',
    backgroundColor: theme.palette.primary.main,
    bottom: 0,
    position: 'fixed',
    marginTop: theme.spacing(8),
    width: '100%',
  },
  typography: {
    color: theme.palette.secondary.dark,
  },
}));

export default useStyles;
