
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import {CdkTreeModule} from '@angular/cdk/tree';
@NgModule({
	exports: [
		MatButtonModule,
		MatIconModule,
		MatExpansionModule,
		CdkTreeModule,
		MatSidenavModule
	]
})

export class AngularMaterialModule { }