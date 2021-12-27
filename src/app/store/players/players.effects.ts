import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as fromActions from './players.actions';
import { getIdCounter } from './players.selectors';

import { map, tap } from 'rxjs/operators';

@Injectable()
export class PlayersEffects {
	create$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fromActions.createPlayer),
			concatLatestFrom(() => this.store.select(getIdCounter)),
			map(([{ name }, id]) => fromActions.addPlayer({ player: { id, name } }))
		)
	);

	constructor(private actions$: Actions, private store: Store) {}
}
