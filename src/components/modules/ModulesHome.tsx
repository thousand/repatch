import * as React from 'react';
import { Link } from 'react-router-dom';
import 'src/components/modules/Modules.css';
import ModulesListFilter from 'src/components/modules/ModulesListFilter';


class ModulesHome extends React.Component {
  public render() {
    return (
      <div>
        <Link to={ `module/new` }>new</Link>
        <ModulesListFilter/>
      </div>
    );
  }
}

export default ModulesHome;
