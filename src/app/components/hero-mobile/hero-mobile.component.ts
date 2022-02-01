import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hero-mobile',
  templateUrl: './hero-mobile.component.html',
  styleUrls: ['./hero-mobile.component.scss']
})
export class HeroMobileComponent implements OnInit {
	@Input() title: string
	@Input() mainText: string

  constructor() { }

  ngOnInit(): void {
  }

}
