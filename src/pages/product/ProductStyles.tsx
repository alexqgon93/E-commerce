import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: { marginLeft: '.5rem', marginRight: '.5rem' },
    titlePage: { textAlign: 'center', marginTop: '3rem' },
    rowCart: { justifyContent: 'center', display: 'flex' },
    columnCartItems: { float: 'left' },
    cart: { padding: '2rem', marginLeft: '10rem' },
    card: {
      height: '100%',
      width: '100%',
      padding: '100px',
    },
  })
);

export default useStyles;
