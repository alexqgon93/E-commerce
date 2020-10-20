import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { Categories } from '../components/types';
import { getAllCategories } from '../services/categories.service';
import Button from '@material-ui/core/Button';

const Dashboard = (): ReactElement => {
  const { refetch: fetchGetAllCategories } = useQuery<Categories>('getAllCategories', async () => getAllCategories());
  const handleGetCategories = async (): Promise<void> => {
    try {
      const getAllCategories = await fetchGetAllCategories();
      console.log(getAllCategories);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Pagina de bienvenida</h1>
      <Button variant="contained" onClick={handleGetCategories}>
        Click and get All Categories
      </Button>
    </div>
  );
};

export default Dashboard;
