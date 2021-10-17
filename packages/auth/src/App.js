import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Landing from './components/Landing';
import Signup from './components/Signup';
import SignIn from './components/Signin';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
          <Route path="/auth/signin" component={SignIn} >
              <SignIn onSignIn={onSignIn}/>
          </Route>
          <Route path="/auth/signup" component={Signup} >
              <Signup onSignIn={onSignIn}/>
          </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
