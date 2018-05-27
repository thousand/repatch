// import * as actions from 'src/actions/actions';

const initialState = {
  availableModules: [],
  patchInProgress: {},
};

export function repatchApp( state = initialState, action: any ) {
  if ( !state ) {
    state = initialState;
  }

  return state;
}
