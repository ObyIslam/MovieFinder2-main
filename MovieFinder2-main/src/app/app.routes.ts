import { Routes } from '@angular/router';
import { SearchtileComponent } from './components/searchtile/searchtile.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path:'',component:SearchtileComponent},
    {path:'search',component:SearchComponent},
    {path:'about',component:AboutComponent},
];
