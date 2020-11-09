import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      overflow: 'hidden',
      boxSizing: 'border-box',
      display: 'inlince-block',
    },
    divLeft: { float: 'left', padding: '2vh', width: '50%', height: '50%' },
    divRight: {
      float: 'right',
      padding: '2vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      height: '50%',
    },
    card: {
      height: '100%',
      width: '100%',
      padding: '100px',
    },
  })
);

export default useStyles;
