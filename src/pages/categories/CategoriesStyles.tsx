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
    },
    container: {
      columnGap: '5rem',
      rowGap: '5rem',
      justifyContent: 'center',
    },
    div: {
      margin: 'auto',
      width: '50%',
      padding: '10px',
    },
  })
);

export default useStyles;
