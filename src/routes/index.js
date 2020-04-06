import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import Destinatarios from '../pages/Destinatarios';
import Encomendas from '../pages/Encomendas';
import Entregadores from '../pages/Entregadores';
import Problemas from '../pages/Problemas';

import NotFoundPage from '../pages/NotFoundPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/recipients" component={Destinatarios} isPrivate />
      <Route path="/orders" component={Encomendas} isPrivate />
      <Route path="/deliveryman" component={Entregadores} isPrivate />
      <Route path="/problems" component={Problemas} isPrivate />

      <Route path="/" component={NotFoundPage} />
    </Switch>
  );
}
