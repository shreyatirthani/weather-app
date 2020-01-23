import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WeatherComponent} from './weather/weather.component';

export const MAIN_ROUTES: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch: 'full' },
  {path: 'home' , component: HomeComponent },
  {path: 'weather' , component: WeatherComponent}

];
