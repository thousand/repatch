import * as React from 'react';
import 'src/components/modules/NewModule.css';


const { Component } = React;

const initialState = {
  name: 'New Module',
  slug: 'new-module',
};

type State = Readonly<typeof initialState>;

class NewModule extends Component<object, State> {
  public readonly state: State = initialState;

  public render() {
    return (
      <form className="Module-form">
        <ul className="form-list">
          <li className="form-list-item Module-form-name">
            <input className="form-list-item-input" type="text" name="name" id="module-name" value={ this.state.name } onChange={ this.updateName }/>
            <label className="form-list-item-label" htmlFor="module-name">name</label>
          </li>
          <li className="form-list-item Module-form-slug">
            <input className="form-list-item-input" type="text" name="slug" id="module-slug" value={ this.state.slug } onChange={ this.updateSlug }/>
            <label className="form-list-item-label" htmlFor="module-slug">name</label>
          </li>
        </ul>
      </form>
    );
  }

  private updateName( e: React.ChangeEvent<HTMLInputElement> ) {
    this.setState({ name: e.target.value });
  }

  private updateSlug( e: React.ChangeEvent<HTMLInputElement> ) {
    this.setState({ slug: e.target.value });
  }


}

export default NewModule;
