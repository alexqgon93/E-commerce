import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2, 2),
    background: 'linear-gradient(359deg, #fafaf9, #4b5b9d)',
    backgroundSize: '400% 400%',
    animation: 'AnimationName 59s ease infinite',
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  typography: {
    color: theme.palette.background.default,
  },
}));

export default useStyles;
