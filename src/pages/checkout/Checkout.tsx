import React, { ReactElement, useContext, useState } from 'react';
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
  const { total, cartItems, clearCart } = useContext(CartContext);
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
  const [postCreateCart] = useMutation(postNewCart);
  const [payment, setPayment] = useState(false);

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Review />;
      default:
        throw new Error('Paso desconocido');
    }
  };
  const handlePayment = () => {
    setPayment(true);
  };
  const dateFormat = () => {
    function pad(s: string | number) {
      return s < 10 ? '0' + s : s;
    }
    var d = new Date();
    return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-');
  };

  const handleContinue = () => {
    navigate('/');
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
        console.log(createCart);
        if (createCart.message === 'Carrito creado correctamente.') {
          handlePayment();
          clearCart();
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
          {!payment && (
            <Typography component="h1" variant="h4" align="center">
              Formalización del pedido
            </Typography>
          )}
          <React.Fragment>
            <React.Fragment>
              {!payment ? (
                getStepContent(activeStep)
              ) : (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Su pedido se ha creado correctamente.
                  </Typography>
                  <Typography variant="subtitle1">
                    Le agradecemos la confianza que deposita en nosotros y pronto nos pondremos en contacto con usted, a
                    través de su correo electrónico para enviarle la información de su pedido.
                  </Typography>
                </React.Fragment>
              )}
              <div className={classes.buttons}>
                {!payment ? (
                  <Button variant="contained" color="secondary" onClick={handleSubmit} className={classes.button}>
                    Realizar pedido
                  </Button>
                ) : (
                  <Button variant="contained" color="secondary" onClick={handleContinue} className={classes.button}>
                    Continuar
                  </Button>
                )}
              </div>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
