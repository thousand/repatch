import * as React from 'react';
import './App.css';
import Nav from './Nav';


class App extends React.Component {
  public render() {
    return (
      <section>
        <Nav/>
        <main className="App"/>
      </section>
    );
  }
}

export default App;
