// Config du jeu
import { SingleObstacles } from '../interfaces/single-obstacle';

export const playGroundHeight = 500;

// definition de la taille de l'ecran de jeu à la largeur max de l'écran
export const playGroundWidth = window.innerWidth;

export const frameNumber = 0;
export const spritePath = '../assets/game_assets/sprites.png';
export const playerAirplaneSpeed = 2;

// Recuperation des données du sprite du joueur
export const playerAirplane = {
  sX: 448, // Player
  sY: 157,
  sWidth: 227,
  sHeight: 70,
  width: 227,
  height: 70,
};

// Recuperation des données du sprite des obstacles

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
