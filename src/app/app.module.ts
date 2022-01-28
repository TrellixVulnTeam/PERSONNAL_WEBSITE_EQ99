import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Widget1Component } from './components/widget1/widget1.component';
import { Widget2Component } from './components/widget2/widget2.component';
import { WidgetComponent } from './components/widget/widget.component';
import { TitleComponent } from './components/title/title.component';
import { AnimationComponent } from './components/animation/animation.component';
import { CvComponent } from './components/cv/cv.component';
import { ShellComponent } from './components/shell/shell.component';
import { QRCodeModule } from 'angular2-qrcode';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GalerieComponent } from './components/galerie/galerie.component';
import { ApigalerieService } from './services/apigalerie.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
// import { IntersectionObserverHooks  } from 'ng-lazyload-image';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './components/game/game.component';
import { AppService } from './services/app.service';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    Widget1Component,
    Widget2Component,
    WidgetComponent,
    TitleComponent,
    AnimationComponent,
    CvComponent,
    ShellComponent,
    ContactComponent,
    GalerieComponent,
    AboutComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    ReactiveFormsModule,
    HttpClientModule,
    LazyLoadImageModule,
    BrowserAnimationsModule
  ],
  providers: [
    ContactService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ApigalerieService,
    AppService,
    GameService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
