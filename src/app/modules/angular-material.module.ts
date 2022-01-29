
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  exports: [
		MatButtonModule,
		MatSidenavModule
  ]
})

export class AngularMaterialModule { }