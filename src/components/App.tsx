import * as React from 'react';
import 'src/components/App.css';
import Nav from 'src/components/Nav';


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
