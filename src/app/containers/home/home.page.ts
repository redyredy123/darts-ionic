import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/player';
import {
	createPlayer,
	deletePlayer,
} from 'src/app/store/players/players.actions';
import { getPlayers } from 'src/app/store/players/players.selectors';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	players$: Observable<Player[]> = this.store.select(getPlayers);
	constructor(private store: Store) {}

	createPlayer(name: string) {
		this.store.dispatch(createPlayer({ name }));
	}
	deletePlayer(playerId: id) {
		this.store.dispatch(deletePlayer({ playerId }));
	}
}
