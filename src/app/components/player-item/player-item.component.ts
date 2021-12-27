import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Player } from 'src/app/models/player';

@Component({
	selector: 'app-player-item',
	templateUrl: './player-item.component.html',
	styleUrls: ['./player-item.component.scss'],
})
export class PlayerItemComponent implements OnInit {
	@Input() player!: Player;
	@Output() deletePlayer: EventEmitter<id> = new EventEmitter<id>();

	constructor(private alertCtrl: AlertController) {}

	ngOnInit() {}

	async confirmDelete() {
		const alert = await this.alertCtrl.create({
			header: 'Are you sure?',
			message: `You're deleating player ${this.player.name}. This is not reversible`,
			buttons: [
				{
					text: 'Cancel',
				},
				{
					text: 'Delete',
					handler: () => this.deletePlayer.emit(this.player.id),
				},
			],
		});
		await alert.present();
	}
}
