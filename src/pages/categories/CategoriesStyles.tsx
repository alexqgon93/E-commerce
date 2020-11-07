import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionCategories: {
      marginTop: theme.spacing(6),
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
  })
);

export default useStyles;
