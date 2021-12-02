import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Intro from '../../Components/Intro/Intro';
import Future from '../../Components/Future/Future';
import Infrastructure from '../../Components/Infrastructure/Infrastructure';
import About from '../../Components/About/About';
import Footer from '../../Components/Footer/Footer';

const App = () => {


  return (
    <>
      <CssBaseline />
        <Intro/>
        <Future/>
        <Infrastructure/>
        <About/>
        <Footer/>
    </>
  );

}

export default App;
