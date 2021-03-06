import { CircularProgress, IconButton, Link } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { ReactElement } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Carts } from '../../components/types';
import { deleteCardById, getCarts } from '../../services/cart.service';
import styles from './AdminPanelStyles.module.scss';

const AdminPanel = (): ReactElement => {
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery<Array<Carts>>('getAllCategories', async () => getCarts());
  const [postDeleteCardByID] = useMutation(deleteCardById);

  const handleDeleteCard = async (id: string): Promise<void> => {
    const deleteCard = await postDeleteCardByID(id);
    if (deleteCard && deleteCard.status === 200) {
      navigate('/adminPanel');
    } else {
      alert(`Error: ${deleteCard?.message}`);
    }
  };

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
                  <th className={styles.column5}>Numero de productos</th>
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
                      <td className={styles.column5}>{item.productQuantity}</td>
                      <td className={styles.column6}>
                        <Link onClick={() => handleDeleteCard(item.cartId)}>
                          <IconButton color="primary" aria-label="upload picture" component="span">
                            <DeleteIcon />
                          </IconButton>
                        </Link>
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
