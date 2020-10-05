import { IRocket, IDragon } from '../../api/api.types';

export enum ActionTypes {
  GET_ROCKETS_SUCCESS = '@spacex/spaceships/GET_ROCKETS_SUCCESS',
  GET_DRAGONS_SUCCESS = '@spacex/spaceships/GET_DRAGONS_SUCCESS',
  LOADING = '@spacex/spaceships/LOADING',
}

export interface ISpaceshipsState {
  loading: boolean;
  rockets: IRocket[];
  dragons: IDragon[];
}

export interface IGetRocketsSuccess {
  type: ActionTypes.GET_ROCKETS_SUCCESS;
  payload: IRocket[];
}

export interface IGetDragonsSuccess {
  type: ActionTypes.GET_DRAGONS_SUCCESS;
  payload: IDragon[];
}

export interface ILoading {
  type: ActionTypes.LOADING;
  payload: boolean;
}

export type ISpaceshipActions =
  | IGetRocketsSuccess
  | IGetDragonsSuccess
  | ILoading;
