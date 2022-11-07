import * as actions from './actions.types';

export const bugAdded = (description: string) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: description,
  },
});

export const bugRemoved = (id: number) => ({
  type: actions.BUG_REMOVED,
  payload: { id: id },
});

export const bugResolved = (id: number) => ({
  type: actions.BUG_RESOLVED,
  payload: { id: id },
});
