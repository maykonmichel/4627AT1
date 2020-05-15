import React, { memo } from 'react';
import { Divider, Grid, Paper } from '@material-ui/core';

import useStyles from '../Newton/useStyles';

export default memo(() => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={12} lg={5}>
        <Paper className={[classes.paper, classes.form]}>
          <h1>Alunos</h1>
          <p>Beatriz Tavares - 181022011</p>
          <p>Jamilly Souza - 181020416</p>
          <p>Maykon Michel - 181022656</p>
          <Divider />
          <p>
            Código fonte em: <a href="https://github.com/maykonmichel/4627AT1">https://github.com/maykonmichel/4627AT1</a>
          </p>
        </Paper>
      </Grid>
    </Grid>
  );
});
