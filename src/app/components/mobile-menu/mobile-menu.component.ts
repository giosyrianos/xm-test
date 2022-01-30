import { Component, OnInit } from '@angular/core';
import {ArrayDataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']

})

export class MobileMenuComponent implements OnInit {

	constructor() { }

	dummy_menu_items: any[] = [
		{
			name: 'Lorem',
			expandable: true,
			level: 0,
		},
		{
			name: 'Lorem Ipsum',
			expandable: false,
			level: 1,
		},
		{
			name: 'Consectur',
			expandable: true,
			level: 0,
		},
		{
			name: 'Lorem Ipsum',
			expandable: false,
			level: 1,
		},
		{
			name: 'Lorem ipsum',
			expandable: false,
			level: 1,
		},
		{
			name: 'Lorem ipsum',
			expandable: false,
			level: 1,
		},
		{
			name: 'Lorem & Ipsum',
			expandable: true,
			level: 0,
		},
		{
			name: 'Lorem ipsum',
			expandable: false,
			level: 1,
		},
		{
			name: 'Dolor',
			expandable: true,
			level: 0,
		},
		{
			name: 'Lorem ipsum',
			expandable: false,
			level: 1,
		},
		{
			name: 'Amet',
			expandable: true,
			level: 0,
		},
		{
			name: 'Lorem ipsum',
			expandable: false,
			level: 1,
		}
	]

  ngOnInit(): void {
	}

	treeControl = new FlatTreeControl<any>(
    (node: any) => node.level,
    (node: any) => node.expandable,
  );

  dataSource = new ArrayDataSource(this.dummy_menu_items);

  hasChild = (_: number, node: any) => node.expandable;

  getParentNode(node: any) {
    const nodeIndex = this.dummy_menu_items.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.dummy_menu_items[i].level === node.level - 1) {
        return this.dummy_menu_items[i];
      }
    }

    return null;
  }

	shouldRender(node: any) {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }



}
