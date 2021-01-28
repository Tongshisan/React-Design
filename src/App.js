import * as React from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom';
import {Provider} from 'mobx-react';
import {routerConfig} from './router';

// import {configure} from 'mobx';
import Index from './pages/index';
import rootStore from './store/index'

const App = () => {
  return (
    <HashRouter>
      <Provider rootStore={rootStore}>
        <Switch>
          {
            routerConfig.map((router) => {
              return (
                <Route
                  component={router.component}
                  path={router.path}
                  exact={router.exact}
                  key={router.path}
                ></Route>
              )
            })
          }
        </Switch>
      </Provider>
    </HashRouter>
  )
}

export default App;