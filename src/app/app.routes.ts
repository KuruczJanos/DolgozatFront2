import { Routes } from '@angular/router';
import { ReslistComponent } from './reslist/reslist.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'reslist', component: ReslistComponent },
    { path: 'home', component: HomeComponent},
    { path: 'app', component: AppComponent},
];
