// Definition de l'interface des obstacles
export interface Obstacles {

	// coordonnées de l'obstacle
	x: number;
	y: number;

	// dimensions
	width: number;
	height: number;


	update: Function;
}