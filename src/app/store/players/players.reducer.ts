import { createReducer, on } from '@ngrx/store';
import { adapter, initState } from './players.state';

import * as fromActions from './players.actions';

export const players = createReducer(
	initState,
	on(fromActions.addPlayer, (state, { player }) =>
		adapter.addOne(player, {
			...state,
			idCounter: state.idCounter + 1,
		})
	),
	on(fromActions.deletePlayer, (state, { playerId }) =>
		adapter.removeOne(playerId, state)
	)
);
