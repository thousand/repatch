import * as React from 'react';
import 'src/components/modules/Modules.css';
import Module from './Module';


export interface Props {
  modules: ReadonlyArray<any>;
}

function ModulesList( { modules }: Props ) {
  return (
    <ul>
      { modules.map(module => (
        <li><Module/></li>
      )) }
    </ul>
  );
};

export default ModulesList;

