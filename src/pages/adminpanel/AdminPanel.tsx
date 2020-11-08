import { CircularProgress, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { Carts } from '../../components/types';
import { getCarts } from '../../services/cart.service';
import styles from './AdminPanelStyles.module.scss';

const AdminPanel = (): ReactElement => {
  const { isLoading, isError, data, error } = useQuery<Array<Carts>>('getAllCategories', async () => getCarts());
  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }
  return (
    <div className={styles.limiter}>
      <h1>Current Orders</h1>
      <div className={styles.container_table100}>
        <div className={styles.wrap_table100}>
          <div className={styles.table100}>
            <table>
              <thead>
                <tr className={styles.table100_head}>
                  <th className={styles.column1}>Data</th>
                  <th className={styles.column2}>Order ID</th>
                  <th className={styles.column3}>Información usuario</th>
                  <th className={styles.column4}>Nombre Productos</th>
                  <th className={styles.column5}>Precio</th>
                  <th className={styles.column6}>Delete Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item, i) => (
                    <tr key={i}>
                      <td className={styles.column1}>{item.cartDate}</td>
                      <td className={styles.column2}>{item.cartId}</td>
                      <td className={styles.column3}>
                        {item.userName} {item.userSurname}
                      </td>
                      <td className={styles.column4}>{item.productName}</td>
                      <td className={styles.column5}>{item.cartAmount}</td>
                      <td className={styles.column6}>
                        <IconButton color="primary" aria-label="upload picture" component="span">
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
