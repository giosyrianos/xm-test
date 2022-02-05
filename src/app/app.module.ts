import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './modules/angular-material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { HeroMobileComponent } from './components/hero-mobile/hero-mobile.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HeroComponent } from './components/hero/hero.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { XmCarouselComponent } from './components/xm-carousel/xm-carousel.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MobileMenuComponent,
    HeroMobileComponent,
    MainMenuComponent,
		HeroComponent,
  XmCarouselComponent
  ],
  imports: [
		BrowserModule,
		AngularMaterialModule,
		BrowserAnimationsModule,
		MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
