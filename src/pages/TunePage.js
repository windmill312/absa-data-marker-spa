import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tune from '../components/PredictPage/Tune';

const TunePage = () => (
  <Switch>
    <Route path="/tune/" exact component={Tune} />
  </Switch>
);

export default TunePage;
