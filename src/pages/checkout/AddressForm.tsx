import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const AddressForm = (): ReactElement => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dirección de envío
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField required id="firstName" name="firstName" label="Nombre" fullWidth autoComplete="given-name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="lastName" name="lastName" label="Apellido" fullWidth autoComplete="family-name" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Dirección de envío"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Dirección de correo electrónico"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
