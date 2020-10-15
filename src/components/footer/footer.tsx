import { AppBar, Container, Typography, Toolbar } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './footer.module.scss';

const Footer = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <AppBar className={styles.wrapperFooter} component="footer" position="fixed" color="inherit" elevation={0}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography>{t('footer.copyright')}</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
