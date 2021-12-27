import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, State } from './players.state';

export const getPlayerState = createFeatureSelector<State>('players');

const { selectAll } = adapter.getSelectors();

export const getPlayers = createSelector(getPlayerState, selectAll);

export const getIdCounter = createSelector(
	getPlayerState,
	(state) => state.idCounter
);
