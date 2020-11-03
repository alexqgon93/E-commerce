import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginBottom: 'auto',
    backgroundColor: theme.palette.primary.main,
    bottom: 0,
    position: 'fixed',
    width: '100%',
  },
  typography: {
    color: '#ffffff',
  },
}));

export default useStyles;
