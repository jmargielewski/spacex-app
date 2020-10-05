import { ErrorActionHandlers } from './error/reducers';
import { IErrorState, IErrorActions } from './error/types';

import { SpaceshipsActionHandlers } from './spaceships/reducers';
import { ISpaceshipsState, ISpaceshipActions } from './spaceships/types';

type InitialStates = ISpaceshipsState | IErrorState;
type ActionHandlers = SpaceshipsActionHandlers | ErrorActionHandlers;
export type Actions = ISpaceshipActions | IErrorActions;

export default function reducerCreator(
  initialState: InitialStates,
  actionHandlers: ActionHandlers
) {
  return (state = initialState, action: Actions) => {
    // @ts-ignore
    const handler = actionHandlers[action.type];
    return handler ? handler(state, action) : state;
  };
}
