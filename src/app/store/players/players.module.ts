import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PlayersEffects } from './players.effects';
import { players } from './players.reducer';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature('players', players),
		EffectsModule.forFeature([PlayersEffects]),
	],
	providers: [PlayersEffects],
})
export class PlayerStateModule {}
