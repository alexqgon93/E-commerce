import { CircularProgress } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { Users } from '../components/types';
import { getAllUsers } from '../services/users.service';

const GeneralProfile = (): ReactElement => {
  const { isLoading, isError, error, data } = useQuery<Array<Users>>('getAllCategories', async () => getAllUsers());

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }
  return (
    <div>
      <h1>Sección de Perfil General</h1>
      {data &&
        data.map((item) => (
          <dl key={item.id}>
            <dt>{item.name}</dt>
            <dd>{item.surname}</dd>
            <dd>{item.date_birth}</dd>
          </dl>
        ))}
    </div>
  );
};

export default GeneralProfile;
