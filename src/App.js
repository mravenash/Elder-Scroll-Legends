import React from 'react';
import ElderScrollsLegends from './Components/ElderScrollsLegends';
import { Container, withStyles } from '@material-ui/core';
import AppStyle from './AppStyles';
const App = (props) => {
  const { classes } = props;
  return (<>
    <Container maxWidth="lg" className={classes.container}>
      <ElderScrollsLegends />
    </Container>
  </>
  );
}

export default withStyles(AppStyle)(App);
