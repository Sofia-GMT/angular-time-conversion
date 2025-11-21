import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TimeConverter } from './components/time-converter/time-converter';
import { AddLocations } from './components/add-locations/add-locations';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'convert-time', component: TimeConverter },
  { path: 'add-locations', component: AddLocations },
  { path: '**', redirectTo: '/home' } // Wildcard route for 404 page
];
