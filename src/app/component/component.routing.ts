import { Routes } from '@angular/router';
import { NgbdpaginationBasicPage } from './pagination/pagination.page';
import { NgbdAlertBasicPage } from './alert/alert.page';

import { NgbdDropdownBasicPage } from './dropdown-collapse/dropdown-collapse.page';
import { NgbdnavBasicPage } from './nav/nav.page';
import { BadgePage } from './badge/badge.page';
import { NgbdButtonsPage } from './buttons/buttons.page';
import { NgbdMapPage } from './map/map.page';
import { CardsPage } from './card/card.page';
import { TablePage } from './table/table.page';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'table',
				component: TablePage
			},
			{
				path: 'card',
				component: CardsPage
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicPage
			},
			{
				path: 'badges',
				component: BadgePage
			},
			{
				path: 'alert',
				component: NgbdAlertBasicPage
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicPage
			},
			{
				path: 'nav',
				component: NgbdnavBasicPage
			},
			{
				path: 'buttons',
				component: NgbdButtonsPage
			},
			{
				path: 'map',
				component: NgbdMapPage
			}
		]
	}
];
