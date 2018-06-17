import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'src/components/modules/NewModule.css';


const { Component } = React;

const initialState = {
  name: 'New Module',
  slug: 'new-module',
};

type State = Readonly<typeof initialState>;

interface ModuleListProps extends RouteComponentProps<any> {
}


class NewModule extends Component<ModuleListProps, State> {
  public readonly state: State = initialState;
  public readonly updateName = ( e: React.ChangeEvent<HTMLInputElement> ) => (
    this.setState( { name: e.target.value } )
  );
  public readonly updateSlug = ( e: React.ChangeEvent<HTMLInputElement> ) => (
    this.setState( { slug: e.target.value } )
  );

  public readonly saveModule = ( e: React.FormEvent<HTMLFormElement> ) => {
    alert( JSON.stringify( this.state ) );
    e.preventDefault();
  };

  public render () {
    return (
      <form className="Module-form" onSubmit={ this.saveModule }>
        <ul className="form-list">
          <li className="form-list-item Module-form-name">
            <input className="form-list-item-input" type="text" name="name" id="module-name" value={ this.state.name } onChange={ this.updateName }/>
            <label className="form-list-item-label" htmlFor="module-name">name</label>
          </li>
          <li className="form-list-item Module-form-slug">
            <input className="form-list-item-input" type="text" name="slug" id="module-slug" value={ this.state.slug } onChange={ this.updateSlug }/>
            <label className="form-list-item-label" htmlFor="module-slug">slug</label>
          </li>
        </ul>
        <button type="submit">Save</button>
      </form>
    );
  }

}

export default NewModule;
