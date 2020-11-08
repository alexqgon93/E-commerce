import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionCategories: {
      marginTop: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#4B5B9D',
    },
    root: {
      display: 'grid',
    },
    container: {
      columnGap: '5rem',
      rowGap: '5rem',
      justifyContent: 'center',
    },
    carousel: {
      height: '400px',
      position: 'relative',
    },
    media: {
      height: '400px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: '300ms',
      backgroundSize: 'contain',
    },
    h1: {
      alignItems: 'center',
      textAlign: 'center',
      color: '#4B5B9D',
    },
    ty: {
      color: '#FAFAF9',
      textAlign: 'center',
      textOverflow: 'ellipsis',
      position: 'relative',
      bottom: 0,
      padding: '15px',
      backgroundColor: 'black',
      opacity: 0.6,
      width: '100%',
    },
    backgoundCarousel: { backgroundColor: theme.palette.background.default },
  })
);

export default useStyles;
