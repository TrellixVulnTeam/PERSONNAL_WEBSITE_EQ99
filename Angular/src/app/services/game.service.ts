import { Injectable, Input } from '@angular/core';

import * as CONFIG from './../config/config';
import { Obstacles } from './../interfaces/obstacles';
import { SingleObstacles } from './../interfaces/single-obstacle';
import { PlayerPosition } from '../interfaces/player-position';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player-model';
import { GameComponent } from '../components/game/game.component';

const baseUrl = 'http://localhost:8080/game'

@Injectable()
export class GameService {

  nickname = "";
	score = setInterval(() => {
		this.score = this.score +1;
		return this.score},
		200
		);
  constructor(private http: HttpClient) { }

  @Input() public width: number = CONFIG.playGroundWidth;
  @Input() public height: number = CONFIG.playGroundHeight;
  frameNumber: number = CONFIG.frameNumber;
  player: PlayerPosition = {
    x: CONFIG.playGroundWidth / 2 - CONFIG.playerAirplane.width,
    y:
      CONFIG.playGroundHeight -
      (CONFIG.playerAirplane.height + CONFIG.playerAirplane.height / 2),
  };

  context: CanvasRenderingContext2D;
  obstacles: Array<Obstacles> = [];
  image: HTMLImageElement = null;
  gameLoop = null;
  moveUP = false;
  moveDown = false;
  moveLeft = false;
  moveRight = false;

  loadAssets(canvasElement: HTMLCanvasElement): Promise<void> {
    this.context = canvasElement.getContext('2d');
    canvasElement.width = this.width;
    canvasElement.height = this.height;
    return new Promise((resolve, reject) => {
      this.image = new Image();
      this.image.src = CONFIG.spritePath;
      this.image.width = 58;
      this.image.height = 128;
      this.image.onload = () => {
        resolve();
      };
    });
  }

  startGameLoop() {
    this.gameLoop = setInterval(() => {
      this.suffleProperties();
      this.cleanGround();
      this.createObstacles();
      this.moveObstacles();
      this.createPlayer();
    }, 10);
  }

  animationFrame(n: number): boolean {
    if ((this.frameNumber / n) % 1 === 0) {
      return true;
    }
    return false;
  }

  suffleProperties(): void {
    this.frameNumber += 1;
  }

  createObstacles(): void {
    if (this.frameNumber === 1 || this.animationFrame(100)) {
      if (this.obstacles.length > 20) {
        this.obstacles.splice(0, 5);
      }
      this.getSingleObstacle();
    }
  }

  getSingleObstacle(): void {
    const context: CanvasRenderingContext2D = this.context;
    const image: HTMLImageElement = this.image;
    const randomVehicle: SingleObstacles =
      CONFIG.airplanesRight[
        Math.floor(Math.random() * CONFIG.airplanesRight.length)
      ];

    this.obstacles.push(
      new (function () {
        (this.y = Math.floor(Math.random() * 450) + 0),
          (this.x = Math.floor(window.innerWidth)),
          (this.width = randomVehicle.width);
        this.height = randomVehicle.height;
        this.update = () => {
          context.drawImage(
            image,
            randomVehicle.sX,
            randomVehicle.sY,
            randomVehicle.sWidth,
            randomVehicle.sHeight,
            this.x,
            this.y,
            randomVehicle.width,
            randomVehicle.height
          );
        };
      })()
    );
  }

  moveObstacles(): void {
    this.obstacles.forEach((element: Obstacles, index: number) => {
      element.x -= 3;
      element.update();
      this.detectCrash(element);
      if (element.x > this.width) {
        this.obstacles.splice(index, 1);
      }
    });
  }

  createPlayer(): void {
    if (this.moveUP) {
      if (this.player.y === 0) {
        this.player.y = 0;
      } else {
        this.player.y -= CONFIG.playerAirplaneSpeed;
      }
    } else if (this.moveDown) {
      if (
        this.player.y + CONFIG.playerAirplane.height ===
          CONFIG.playGroundHeight ||
        this.player.y + CONFIG.playerAirplane.height > CONFIG.playGroundHeight
      ) {
        this.player.y = CONFIG.playGroundHeight - CONFIG.playerAirplane.height;
      } else {
        this.player.y += CONFIG.playerAirplaneSpeed;
      }
    } else if (this.moveLeft) {
      if (this.player.x === 0 || this.player.x < 0) {
        this.player.x = 0;
      } else {
        this.player.x -= CONFIG.playerAirplaneSpeed;
      }
    } else if (this.moveRight) {
      if (
        this.player.x + CONFIG.playerAirplane.sWidth ===
          CONFIG.playGroundWidth ||
        this.player.x + CONFIG.playerAirplane.sWidth > CONFIG.playGroundWidth
      ) {
        this.player.x = CONFIG.playGroundWidth - CONFIG.playerAirplane.width;
      } else {
        this.player.x += CONFIG.playerAirplaneSpeed;
      }
    }
    this.context.drawImage(
      this.image,
      CONFIG.playerAirplane.sX,
      CONFIG.playerAirplane.sY,
      CONFIG.playerAirplane.sWidth,
      CONFIG.playerAirplane.sHeight,
      this.player.x,
      this.player.y,
      CONFIG.playerAirplane.width,
      CONFIG.playerAirplane.height
    );
  }

  detectCrash(obstacle: Obstacles): void {
    const componentLeftSide = obstacle.x;
    const componentRightSide = obstacle.x + obstacle.width;
    const componentTop = obstacle.y;
    const componentBottom = obstacle.y + obstacle.height;

    const carRightSide = this.player.x + CONFIG.playerAirplane.width;
    const carLeftSide = this.player.x;
    const carTop = this.player.y;
    const carBottom = this.player.y + CONFIG.playerAirplane.height;

    if (
      carRightSide > componentLeftSide &&
      carTop < componentBottom &&
      carLeftSide < componentRightSide &&
      carTop < componentBottom &&
      carRightSide > componentLeftSide &&
      carBottom > componentTop &&
      carLeftSide < componentRightSide &&
      carBottom > componentTop
    ) {
      clearInterval(this.gameLoop);
      this.create(this.nickname);
      alert('Game Over '+this.nickname+' your score is '+this.score);
      window.location.reload();
    }
  }

  cleanGround(): void {
    this.context.clearRect(
      0,
      0,
      CONFIG.playGroundWidth,
      CONFIG.playGroundHeight
    );
  }

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  addPlayer(): void {
    this.nickname = prompt("Choose your nickname");
  }
}
