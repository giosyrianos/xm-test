
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatDividerModule } from '@angular/material/divider';
import { LayoutModule } from '@angular/cdk/layout';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
	exports: [
		MatButtonModule,
		MatIconModule,
		MatExpansionModule,
		CdkTreeModule,
		MatSidenavModule,
		LayoutModule,
		MatDividerModule,
		MatMenuModule
	]
})

export class AngularMaterialModule { }