import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DataTableComponent} from './data-table/data-table.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'table',      component: DataTableComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
