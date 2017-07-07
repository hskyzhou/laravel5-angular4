import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes = [
	{
		path : "",
		redirectTo : "app",
		pathMatch : "full"
	},
	{
		path : "app",
		Component : AppComponent
	}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
