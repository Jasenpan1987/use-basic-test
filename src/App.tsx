import React from 'react';
import './App.css';
import { Header, Footer, themeWithCustoms, MyTypography, ITheme } from "basic-test"
import { ThemeProvider, makeStyles, createStyles } from "@material-ui/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette }: ITheme) => {
  return createStyles({
   heading1: {
     backgroundColor: "#ff0000"
   }
  });
});

const App: React.FC = () => {
  const classes = useStyles({});
  return (
    <ThemeProvider theme={themeWithCustoms}>
    <div className="App">
      <Header foo="hello" bar="world" />
      <Footer name="hello" age="123"/>
      <MyTypography variant="h1" className={classes.heading1}>abc123</MyTypography>
      <Typography variant="h3" color="error">Im typography from outside</Typography>
    </div>
    </ThemeProvider>
  );
}

export default App;
