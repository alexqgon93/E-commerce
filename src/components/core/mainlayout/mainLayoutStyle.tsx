import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: '100vh',
      background: 'linear-gradient(234deg, #fafaf9, #8c796a)',
      animation: 'AnimationName 12s ease infinite',
      position: 'relative',
    },
    contentWrap: {
      height: '100%',
      paddingBottom: '8rem',
    },
    footer: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
    },
  })
);

export default useStyles;
