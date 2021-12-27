import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Player } from 'src/app/models/player';

export interface State extends EntityState<Player> {
	idCounter: id;
}

export const adapter: EntityAdapter<Player> = createEntityAdapter<Player>();

export const initState: State = adapter.getInitialState({
	idCounter: 1,
});
