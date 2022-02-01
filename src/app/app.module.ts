import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './modules/angular-material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { HeroMobileComponent } from './components/hero-mobile/hero-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MobileMenuComponent,
    HeroMobileComponent
  ],
  imports: [
		BrowserModule,
		AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
