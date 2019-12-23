import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import HomePage from './containers/HomePage';
import DoggoPage from './containers/DoggoPage';
import { Header } from './components/Header';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
import PageLayout from './components/PageLayout';

export default function App() {
  return (
    <Router>
      <PageLayout>
        <Header
          className="App-header"
          showLogo
          greeting="Doggo app"
        />

        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>

          <Route path="/doggos">
            <DoggoPage counter={20}/>
          </Route>

          {/*<Route path="/doggo/:id">*/}
          {/*<DoggoPage/>*/}
          {/*</Route>*/}

          <Route
            path="/not-found"
            render={routeProps => (
              <NotFoundPage {...routeProps}/>
            )}
          />

          <Redirect
            from="*"
            to={{
              pathname: '/not-found'
            }}
          />
        </Switch>
      </PageLayout>
    </Router>
  );
}

function DummyComponent() {
  return <h2>Dummy Component here!</h2>;
}
