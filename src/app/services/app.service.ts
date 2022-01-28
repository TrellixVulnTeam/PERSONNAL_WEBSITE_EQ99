import { Injectable, EventEmitter } from '@angular/core';
import { GameService } from './game.service';

@Injectable()
export class AppService {

	isImageLoaded: EventEmitter<number> = new EventEmitter();
	constructor(private gameService: GameService) { }

	createPlayGround(canvasElement): void {
		this.gameService.loadAssets(canvasElement).then( (image) => {
      setTimeout( () =>{
        	this.isImageLoaded.emit();
      },1000);
		});
	}

	getImageLoadEmitter() {
		return this.isImageLoaded;
	}

	movePlayer(event: KeyboardEvent, type: string): void {
		if (type == 'keydown') {
			if (event.key === "Left") {
				this.gameService.moveLeft = true;
				this.gameService.moveUP = false;
				this.gameService.moveDown = false;
			} else if (event.key === "Right") {
				this.gameService.moveRight = true;
				this.gameService.moveLeft = false;
				this.gameService.moveUP = false;
				this.gameService.moveDown = false;
			} else if (event.key === "Up") {
				this.gameService.moveUP = true;
				this.gameService.moveLeft = false;
				this.gameService.moveRight = false;
				this.gameService.moveDown = false;
			} else if (event.key === "Down") {
				this.gameService.moveDown = true;
				this.gameService.moveLeft = false;
				this.gameService.moveRight = false;
				this.gameService.moveUP = false;
			}
		} else if (type === 'keyup') {
			this.gameService.moveDown = false;
			this.gameService.moveLeft = false;
			this.gameService.moveRight = false;
			this.gameService.moveUP = false;
		}
	}
}