import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Widget1Component } from './widget1/widget1.component';
import { Widget2Component } from './widget2/widget2.component';
import { WidgetComponent } from './widget/widget.component';
import { TitleComponent } from './title/title.component';
import { AnimationComponent } from './animation/animation.component';
import { CvComponent } from './cv/cv.component';
import { ShellComponent } from './shell/shell.component';
import { QRCodeModule } from 'angular2-qrcode';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GalerieComponent } from './galerie/galerie.component';
import { ApigalerieService } from './apigalerie.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
// import { IntersectionObserverHooks  } from 'ng-lazyload-image';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AboutComponent
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
    ApigalerieService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
