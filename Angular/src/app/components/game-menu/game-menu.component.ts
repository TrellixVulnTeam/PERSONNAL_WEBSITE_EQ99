import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.scss']
})
export class GameMenuComponent implements OnInit {

  constructor() { }

  nickname: String;

  ngOnInit(): void {
  }

  playButton(): void {
    this.nickname = document.getElementById("nameNickname").innerHTML;
    console.log(this.nickname);
	}
}
