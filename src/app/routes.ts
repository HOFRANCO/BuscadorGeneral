import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComiteComponent } from './components/comite/comite.component';
import { ComiteFechaComponent } from './component/comite-fecha/comite-fecha.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'comite/:termino', component: ComiteComponent },
    { path: 'comiteF/:fecha', component: ComiteFechaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);