import * as actions from './actions.types';

let lastId = 0;

type Action = {
  type: string;
  payload: Bug;
};

type Bug = {
  id: number;
  description: string;
  resolved: boolean;
};

export function reducer(state: Bug[] = [], action: Action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.BUG_RESOLVED:
      return state.map((bug) => (bug.id === action.payload.id ? { ...bug, resolved: true } : bug));

    default:
      return state;
  }
}
