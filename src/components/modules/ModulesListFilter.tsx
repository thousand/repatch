import { connect, Dispatch } from 'react-redux';
import { ModuleAction } from 'src/actions/actions';
import { StoreState } from 'src/reducers/repatchAppStore';
import ModulesList from './ModulesList';


​
// const getVisibleTodos = ( todos, filter ) => {
//   switch ( filter ) {
//     case VisibilityFilters.SHOW_ALL:
//       return todos;
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter(t => t.completed);
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter(t => !t.completed);
//     default:
//       throw new Error('Unknown filter: ' + filter);
//   }
// };
// ​
const mapStateToProps = ( state: StoreState ) => ( {
  modules: state.availableModules,
} );
​
const mapDispatchToProps = ( dispatch: Dispatch<ModuleAction> ) => ( {} );
​
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModulesList);
