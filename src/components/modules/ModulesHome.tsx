import * as React from 'react';
import { Link } from 'react-router-dom';
import 'src/components/modules/Modules.css';
import ModulesList from './ModulesList';


class ModulesHome extends React.Component {
  public render() {
    return (
      <div>
        <Link to={ `module/new` }>new</Link>
        <ModulesList/>
      </div>
    );
  }
}

export default ModulesHome;
