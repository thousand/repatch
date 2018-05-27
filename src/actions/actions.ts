export enum ModuleActionKeys {
  ADD_MODULE = 'ADD_MODULE',
  REMOVE_MODULE = 'REMOVE_MODULE',
  UPDATE_MODULE = 'UPDATE_MODULE',
  OTHER = '__any_other_action_type__'
}

export interface AddModuleAction {
  type: ModuleActionKeys.ADD_MODULE,
  name: string,
  slug?: string,
  manufacturer?: string
}

export interface RemoveModuleAction {
  type: ModuleActionKeys.REMOVE_MODULE,
  id: number
}

export interface UpdateModuleAction {
  type: ModuleActionKeys.UPDATE_MODULE,
  id: number,
  name?: string,
  slug?: string,
  manufacturer?: string
}

export interface OtherModuleAction {
  type: ModuleActionKeys.OTHER
}

export type ModuleActionTypes =
  | AddModuleAction
  | RemoveModuleAction
  | UpdateModuleAction
  | OtherModuleAction;

export const addModuleActionBuilder = ( name: string, slug?: string, manufacturer?: string ): AddModuleAction => {
  if ( !slug ) {
    slug = name
      .replace(/[']/, '')
      .replace(/\W/, '-');
  }

  const addModuleAction: AddModuleAction = {
    name,
    slug,
    type: ModuleActionKeys.ADD_MODULE,
  };

  if ( manufacturer ) {
    addModuleAction.manufacturer = manufacturer;
  }

  return addModuleAction;
};
