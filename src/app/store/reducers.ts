import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { PlayerState, players } from './players';

export interface State {
	players: PlayerState.State;
}

export const reducers: ActionReducerMap<State> = {
	players,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
	? []
	: [];
