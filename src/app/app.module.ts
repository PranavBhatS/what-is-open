import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { NavbarAnimationDirective } from './helpers/navbar-animation.directive';
import { HomeComponent } from './sections/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarAnimationDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NavbarComponent
  ]
})
export class AppModule { }
