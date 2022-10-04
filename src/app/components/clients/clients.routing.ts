import { Routes, RouterModule } from '@angular/router';
import { ClientCardComponent } from './client-card/client-card.component';
import { ClientsComponent } from './clients.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    pathMatch: 'prefix'
  },
  {
    path: ':id',
    component: ClientCardComponent,
  },
];

export const ClientsRoutes = RouterModule.forChild(routes);