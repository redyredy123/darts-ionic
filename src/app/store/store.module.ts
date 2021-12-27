import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PlayerStateModule } from './players';
import { reducers, metaReducers } from './reducers';

@NgModule({
	imports: [
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot(),
		PlayerStateModule,
	],
})
export class RootStoreModule {}
