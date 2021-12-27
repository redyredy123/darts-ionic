import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer,
} from '@ngrx/store';
import { Keys, localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import { PlayerState, players } from './players';

export interface State {
	players: PlayerState.State;
}

export const reducers: ActionReducerMap<State> = {
	players,
};

const STORE_KEYS_TO_PERSIST: Keys = ['players'];

export const localStorageSyncReducer = (
	reducer: ActionReducer<State>
): ActionReducer<State> =>
	localStorageSync({
		keys: STORE_KEYS_TO_PERSIST,
		// keys: [],
		rehydrate: true,
	})(reducer);

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
