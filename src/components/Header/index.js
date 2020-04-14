import React, { memo } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import HeaderItem from '../HeaderItem';

import useStyles from './useStyles';

const Header = memo(() => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
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
