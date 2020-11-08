import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100%',
      background: 'linear-gradient(234deg, #fafaf9, #8c796a)',
      animation: 'AnimationName 12s ease infinite',
      position: 'relative',
    },
    content: {
      background: 'transparent',
    },
  })
);

export default useStyles;
