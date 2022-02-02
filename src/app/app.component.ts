import {Component,OnInit, OnDestroy} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	destroyed = new Subject<void>();
	currentScreenSize: string;
// this should be provided by a service

	title = `Lorem ipsum dolor? Excepteur sint occaecat!`;
	mainText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
	magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat.`
	isMenuVisible = false;

	displayNameMap = new Map([
		[Breakpoints.XSmall, 'Small'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);


	constructor(public breakpointObserver: BreakpointObserver) {
		this.setScreenSize()
	 }

	ngOnInit(): void {

	}

	setScreenSize() {
		this.breakpointObserver.observe([
			Breakpoints.XSmall,
			Breakpoints.Small,
			Breakpoints.Medium,
			Breakpoints.Large,
			Breakpoints.XLarge,
		])
		.pipe(takeUntil(this.destroyed))
		.subscribe(result => {
			console.log(result)
			for (const query of Object.keys(result.breakpoints)) {
				if (result.breakpoints[query]) {
					this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
				}
			}
		});
	}

	hideContent(e: any) {
		this.isMenuVisible = e;
	}
}
