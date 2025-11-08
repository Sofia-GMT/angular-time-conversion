import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TimeConverter } from './components/time-converter/time-converter';
import { AddLocations } from './components/add-locations/add-locations';
import { DeleteLocations } from './components/delete-locations/delete-locations';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'convert-time', component: TimeConverter },
  { path: 'add-locations', component: AddLocations },
  { path: 'delete-locations', component: DeleteLocations },
  { path: '**', redirectTo: '/home' } // Wildcard route for 404 page
];
