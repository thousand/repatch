import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import ModulesHome from 'src/components/modules/ModulesHome';
import NewModule from 'src/components/modules/NewModule';
import { repatchApp } from 'src/reducers/repatchAppStore';


import './App.css';
import Nav from './Nav';


const store = createStore(repatchApp);

class App extends React.Component {
  public render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <section>
            <Nav/>
            <main className="App">
              <Switch>
                <Route exact={ true } path="/module" component={ ModulesHome }/>
                { /*<route exact={true} path="/module/:moduleId" component={ ModuleDetail }/*/ }
                <Route exact={ true } path="/module/new" component={ NewModule }/>
              </Switch>
            </main>
          </section>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
