import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: { marginLeft: '.5rem', marginRight: '.5rem' },
    titlePage: { textAlign: 'center', marginTop: '3rem' },
    rowCart: { justifyContent: 'center', display: 'flex' },
    columnCartItems: { float: 'left' },
    checkout: { textAlign: 'center', padding: '3rem', margin: '9rem' },
    outterContainer: {},
    buttons: { textAlign: 'center' },
    infoCartEmpty: { padding: '1rem' },
    cart: { padding: '2rem', marginLeft: '10rem' },
    imageContainer: {
      display: 'inline-block',
      flexDirection: 'column',
      margin: '0.5rem',
      padding: '0.5rem',
    },
    image: {
      flexDirection: 'column',
      margin: '0 auto',
      maxHeight: '50px',
    },
    productInfo: {
      display: 'inline-block',
      margin: '1.5rem',
      padding: '0.5rem',
    },
    productQuantity: {
      flexDirection: 'column',
      display: 'inline-block',
      textAlign: 'center',
      margin: '0.5rem',
      padding: '0.5rem',
    },
    productActions: {
      display: 'inline-block',
      margin: '1.5rem',
    },
    productParraf: {
      marginBottom: '.25rem',
    },
    productInfoQuantity: {
      marginBottom: '1rem',
    },
    header3: { margin: '0rem', textAlign: 'right' },
    jumpLine: { marginTop: '1.5rem', marginBottom: '1.5rem' },
  })
);

export default useStyles;
