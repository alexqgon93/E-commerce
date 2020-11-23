import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Cart from '@material-ui/icons/ShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import React, { useContext, useEffect } from 'react';
import { AppBar, Button } from '@material-ui/core';
import useStyles from './headerStyles';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/storeContexts/cartContext';
import { jwtType } from '../../types';

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { itemCount } = useContext(CartContext);
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
  const [, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    console.log(user);
  });

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClickOnProfile = () => {
    navigate('/login');
    handleMenuClose();
  };

  const handleLogOut = () => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleClickOnAdminPanel = () => {
    navigate('/adminpanel');
    handleMenuClose();
  };

  const handleClickOnCart = () => {
    navigate('/cart');
    handleMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {user && user.isAuth === '1' && (
        <MenuItem onClick={handleClickOnAdminPanel}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          AdminPanel
        </MenuItem>
      )}
      {!user && (
        <MenuItem onClick={handleClickOnProfile}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          Log In
        </MenuItem>
      )}
      {user && (
        <MenuItem onClick={() => localStorage.removeItem('user')}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          Logout
        </MenuItem>
      )}
      <MenuItem onClick={handleClickOnCart}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Badge badgeContent={itemCount} color="secondary">
            <Cart />
          </Badge>
        </IconButton>
        Cart
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <div onClick={() => navigate('/')}>Motorcycle E-commerce</div>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {user && user.isAuth === '1' && (
              <Button color="inherit" onClick={handleClickOnAdminPanel}>
                AdminPanel
              </Button>
            )}
            {user && (
              <Button color="inherit" onClick={() => handleLogOut()}>
                Logout
              </Button>
            )}
            <IconButton onClick={handleClickOnCart} aria-label="cart" color="inherit">
              <Badge badgeContent={itemCount} color="secondary">
                <Cart />
              </Badge>
            </IconButton>
            {!user && (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleClickOnProfile}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
