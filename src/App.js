import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CreateStore from "./store/store";
import {
  Login,
  FeatureQuestionPage,
  UserProfilePage,
  NotFoundPage
} from "./pages";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.css';

function App(props) {
  const store = CreateStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login {...props} />
          </Route>
          <Route path="/feature-questions">
            <FeatureQuestionPage {...props} />
          </Route>
          <Route path="/users/:id/:name">
            <UserProfilePage {...props} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
