import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionCategories: {
      marginTop: theme.spacing(4),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    root: {
      display: 'grid',
      justifyContent: 'space-around',
      gridGap: '.5rem',
    },
    container: {
      alignItems: 'center',
      gridTemplateColumns: '100px repeat(2, 50px) 200px',
      gridTemplateRows: 'repeat(2, 50px 100px)',
      columnGap: '10rem',
      rowGap: '10rem',
      justifyContent: 'center',
    },
    rootCard: {
      maxWidth: 345,
    },
    mediaCard: {
      height: 140,
    },
    carousel: {
      height: '400px',
      position: 'relative',
    },
    media: {
      backgroundColor: theme.palette.background.default,
      height: '400px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: '300ms',
      position: 'relative',
    },
    h1: {
      alignItems: 'center',
      textAlign: 'center',
    },
  })
);

export default useStyles;
