import { createAction, props } from '@ngrx/store';
import { Player } from 'src/app/models/player';

export const createPlayer = createAction(
	'[Player] Create',
	props<{ name: string }>()
);

export const addPlayer = createAction(
	'[Player] Add',
	props<{ player: Player }>()
);

export const deletePlayer = createAction(
	'[Player] Delete',
	props<{ playerId: id }>()
);
