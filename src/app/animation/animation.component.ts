import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.load(
      'particles-js',
      'assets/data/particles.json',
       function() { 
      console.log('callback - particles.js config loaded');
     });
  }

}
