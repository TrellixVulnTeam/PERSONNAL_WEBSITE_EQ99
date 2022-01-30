import { SingleObstacles } from '../interfaces/single-obstacle';

export const playGroundHeight = 500;
export const playGroundWidth = window.innerWidth;
export const frameNumber = 0;
export const spritePath = '../assets/game_assets/sprites.png';
export const playerAirplaneSpeed = 2;
export const playerAirplane = {
  sX: 448, // Player
  sY: 157,
  sWidth: 227,
  sHeight: 70,
  width: 227,
  height: 70,
};
export const airplanesRight: SingleObstacles[] = [
  {
    sX: 448, // AirplaneLeft
    sY: 325,
    sWidth: 227,
    sHeight: 70,
    width: 227,
    height: 70,
  },
];
export const airplanesLeft: SingleObstacles[] = [
  {
    sX: 448, // AirplaneRight
    sY: 245,
    sWidth: 227,
    sHeight: 70,
    width: 227,
    height: 70,
  },
];
