import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from '../../route-transition-animations';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [routeTransitionAnimations]
})
export class ShellComponent implements OnInit {
  

  prepareRoute(outlet: RouterOutlet): boolean {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
	}
  constructor() { }

  ngOnInit(): void {
  }

}
