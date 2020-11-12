import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outterContainer: {},
    innerContainer: {
      paddingTop: .5,
      paddingBottom: .5,
    },
    imageContainer: {
      margin: .5,
      padding: .5,
    },
    image:{
      margin: "0 auto", 
      maxHeight: "50px"},
    productInfo: {
      margin: 1.5,
      padding: .5,
    },
    productQuantity: {
      textAlign: 'center',
      margin: .5,
      padding: .5,
    },
    productActions: {
      textAlign: 'right',
      margin: 1.5,
      padding: .5,
    },
  })
);

export default useStyles;
