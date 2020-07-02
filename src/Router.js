import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Header from './components/header/Header';
import NotFoundPage from './pages/NotFoundPage';
import TunePage from './pages/TunePage';
import PageContainer from './components/PageContainer';

const RootRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <>
      <Header />
      <PageContainer>
        <Switch>
          <Route path="/tune" component={TunePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </PageContainer>
    </>
  </ConnectedRouter>
);

export default RootRouter;
