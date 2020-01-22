import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);
