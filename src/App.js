import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Intro from './components/Intro';
import StepOne from './components/Step1/index';
import StepTwo from './components/Step2/index';
import StepThree from './components/Step3/index';

//This Project already has React Router in the package.json, just replace with routes for your new components.

function App() {
  return (
   
      <Router>
          <Route path='/' exact component={Intro} />
          <Route path='/stepone' exact component={StepOne} />
          <Route path='/steptwo' exact component={StepTwo} />
          <Route path='/stepthree' exact component={StepThree} />
      </Router>
  
  );
}

export default App;

