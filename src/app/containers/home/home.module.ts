import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { CreatePlayerComponent } from 'src/app/components/create-player/create-player.component';
import { PlayerItemComponent } from 'src/app/components/player-item/player-item.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomePageRoutingModule,
		ReactiveComponentModule,
	],
	declarations: [HomePage, CreatePlayerComponent, PlayerItemComponent],
})
export class HomePageModule {}
