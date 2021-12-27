import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-create-player',
	templateUrl: './create-player.component.html',
	styleUrls: ['./create-player.component.scss'],
})
export class CreatePlayerComponent implements OnInit {
	@Output() create: EventEmitter<string> = new EventEmitter<string>();
	name = '';

	constructor() {}

	ngOnInit() {}

	_create(name: string) {
		this.create.emit(name);
		this.name = '';
	}
}
