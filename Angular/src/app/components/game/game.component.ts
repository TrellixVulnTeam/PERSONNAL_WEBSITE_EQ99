import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  HostListener,
} from '@angular/core';
import { AppService } from '../../services/app.service';
import { GameService } from '../../services/game.service';
// import {ChangeDetectorRef} from '@angular/core';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss'],
})
export class GameComponent implements AfterViewInit {


	@ViewChild('canvas') public canvas: ElementRef;
	subscription: any;
	showLoader = true;
	nickname= "";

	score = setInterval(() => {
      this.score = this.gameService.score;
      return this.score},
      100
      );
	

	constructor(
		private appService: AppService,
		private gameService: GameService
	) {}


	public ngAfterViewInit() {


		const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;

		//Initialisation de l'affichage
		this.appService.createPlayGround(canvasEl);

		//Sequence de lancement du jeu
		this.subscription = this.appService.getImageLoadEmitter()
			.subscribe((item) => {
				this.showLoader = false;
				this.gameService.startGameLoop();
			});
	}

	// Detection touche enfoncée
	@HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
		this.appService.movePlayer(event, 'keydown');
	}
	//Detection touche relevée
	@HostListener('document:keyup', ['$event']) onKeyupHandler(event: KeyboardEvent) {
		this.appService.movePlayer(event, 'keyup');
	}
}

