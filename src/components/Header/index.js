import React, { memo, useCallback } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import HeaderItem from '../HeaderItem';

import useStyles from './useStyles';

import logo from '../../assets/images/logo.png';

const Header = memo(() => {
  const classes = useStyles();

  const history = useHistory();

  const navigateToHome = useCallback(() => history.push('/'), [history]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={navigateToHome}
          >
            <img src={logo} alt="" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            1º trabalho - Programação não linear: monovariável
          </Typography>
          <HeaderItem path="/busca-uniforme" title="Busca uniforme" />
          <HeaderItem path="/busca-dicotomica" title="Busca dicotômica" />
          <HeaderItem path="/secao-aurea" title="Seção áurea" />
          <HeaderItem path="/busca-de-fibonacci" title="Busca de Fibonacci" />
          <HeaderItem path="/bissecao" title="Bisseção" />
          <HeaderItem path="/newton" title="Newton" />
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default Header;
