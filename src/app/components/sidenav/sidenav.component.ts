import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
	@Output() menuToggled = new EventEmitter<boolean>();

	showMenu = false;
	constructor() { }

	ngOnInit(): void {
	}

	toggleMenu() {
		this.showMenu = !this.showMenu;
		this.menuToggled.emit(this.showMenu)
	}

	onExpansionClose(e: any) {
		this.showMenu = false;
	}

}
