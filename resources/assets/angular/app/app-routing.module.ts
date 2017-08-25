import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dash/dash.component';

const appRoutes : Routes = [
	{
		path : '',
		redirectTo : 'dash',
		pathMatch : 'full'
	},
	{
		path : 'dash',
		component : DashComponent
	}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
    	appRoutes,
    	{
    		enableTracing : true
    	}
    )
  ],
  declarations: [
  ],
  exports : [
  	RouterModule
  ]
})
export class AppRoutingModule { }
