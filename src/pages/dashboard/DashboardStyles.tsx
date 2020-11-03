import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionCategories: {
      marginTop: theme.spacing(6),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

export default useStyles;
