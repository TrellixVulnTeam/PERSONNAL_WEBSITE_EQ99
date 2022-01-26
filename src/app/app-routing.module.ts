import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from '../app/cv/cv.component';
import { ContactComponent } from '../app/contact/contact.component';
import { GalerieComponent } from './galerie/galerie.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { animationState: 'Home' },
      },
      { path: 'cv', component: CvComponent, data: { animationState: 'Cv' } },
      {
        path: 'contact',
        component: ContactComponent,
        data: { animationState: 'Contact' },
      },
      {
        path: 'galerie',
        component: GalerieComponent,
        data: { animationState: 'Galerie' },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { animationState: 'About' },
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
