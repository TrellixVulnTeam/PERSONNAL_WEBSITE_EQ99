import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.scss'],
})
export class GameMenuComponent implements OnInit {
  constructor(private gameService: GameService) {}

  playerName: string;

  ngOnInit(): void {}

  public playButton(): void {
    console.log(this.playerName);
    if ((this.playerName == null)) {
      alert('Playername cannot be empty!');
    } else {
      this.gameService.nickname = this.playerName;
      window.location.href = 'https://antonindisperati.fr/#/game';
    }
  }
}
