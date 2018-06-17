import { ModuleAction, ModuleActionKeys } from 'src/actions/actions';


const initialState: StoreState = {
  availableModules: [ { id: 0, name: 'Hello', slug: 'world' } ],
  patchInProgress: {},
};

export interface Module {
  id?: number,
  name: string,
  slug: string
}

export interface StoreState {
  availableModules: ReadonlyArray<Module>,
  patchInProgress: object
}


export function repatchApp( state: StoreState, action: ModuleAction ): StoreState {
  if ( !state ) {
    state = initialState;
  }

  switch ( action.type ) {
    case ModuleActionKeys.ADD_MODULE:
      const { name, slug } = action;
      return {
        ...state,
        availableModules: [ ...state.availableModules, { name, slug } ],
      };
  }

  return state;
};

