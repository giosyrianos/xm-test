import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xm-carousel',
  templateUrl: './xm-carousel.component.html',
  styleUrls: ['./xm-carousel.component.scss']
})
export class XmCarouselComponent implements OnInit {
	backgroundImg = `assets/images/bg1.png`
	public slidesList = [
		{
			id: 1,
			image: 'assets/images/slide1.png',
			title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`
		},
		{
			id: 2,
			image: '/assets/images/slide2.png',
			title: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
		},
		{
			id: 3,
			image: '/assets/images/slide3.png',
			title: `Excepteur sint occaecat!`
		}
	]

  constructor() { }

  ngOnInit(): void {
  }

}
