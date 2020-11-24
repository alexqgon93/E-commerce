import React, { ReactElement, useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Review from './Review';
import useStyles from './CheckOutStyles';
import { CartContext } from '../../components/core/context/storeContexts/cartContext';
import { useMutation } from 'react-query';
import { postNewCart } from '../../services/cart.service';
import { useNavigate } from 'react-router-dom';

const Checkout = (): ReactElement => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [activeStep] = React.useState(0);
  const { total, cartItems } = useContext(CartContext);
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
  const [postCreateCart] = useMutation(postNewCart);

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Review />;
      default:
        throw new Error('Paso desconocido');
    }
  };
  const dateFormat = () => {
    function pad(s: string | number) {
      return s < 10 ? '0' + s : s;
    }
    var d = new Date();
    return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-');
  };

  const handleSubmit = async () => {
    const arrayProducts = cartItems.map((data: any) => {
      return {
        id: data.id,
        quantity: data.quantity,
      };
    });
    try {
      const createCart = await postCreateCart({
        userId: user.id,
        date: dateFormat(),
        amount: parseFloat(total),
        products: arrayProducts,
      });
      if (createCart) {
        if (createCart.status === 201) {
          alert(createCart.message);
          localStorage.removeItem('cart');
          navigate('/');
        } else {
          alert(createCart.message);
          localStorage.removeItem('id_token');
          localStorage.removeItem('user');
          navigate('/login');
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Formalización del pedido
          </Typography>

          <React.Fragment>
            <React.Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                <Button variant="contained" color="secondary" onClick={handleSubmit} className={classes.button}>
                  Realizar pedido
                </Button>
              </div>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
