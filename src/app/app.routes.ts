import { Routes } from '@angular/router';
import { ReslistComponent } from './reslist/reslist.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ResaddComponent } from './resadd/resadd.component';

export const routes: Routes = [
    { path: 'reslist', component: ReslistComponent },
    { path: 'app-home', component: HomeComponent},
    { path: 'app-root', component: AppComponent},
    { path: 'resadd', component:ResaddComponent}
];
