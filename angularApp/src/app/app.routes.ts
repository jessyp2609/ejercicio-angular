import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Clientes } from './clientes/clientes';
import { Proveedores } from './proveedores/proveedores';
import { Empleados } from './empleados/empleados';
import { Articles } from './articles/articles';

export const routes: Routes = [
  // Ruta principal: redirige al dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'clientes', component: Clientes },
  { path: 'proveedores', component: Proveedores },
  { path: 'empleados', component: Empleados },
  { path: 'articles', component: Articles }
];
