import {
  CircularProgress,
  CssBaseline,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Title } from '@material-ui/icons';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { Carts } from '../../components/types';
import { getCarts } from '../../services/cart.service';

const AdminPanel = (): ReactElement => {
  const { isLoading, isError, data, error } = useQuery<Array<Carts>>('getAllCategories', async () => getCarts());
  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }
  return (
    <div>
      <CssBaseline />
      <div>
        <Title>Recent Orders</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Products Purchased</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((item, i) => (
                <TableRow key={i}>
                  <TableCell>{item.cartId}</TableCell>
                  <TableCell>{item.cartDate}</TableCell>
                  <TableCell>
                    {item.userName} {item.userSurname}
                  </TableCell>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell align="right">{item.cartAmount}</TableCell>
                  <TableCell>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminPanel;
