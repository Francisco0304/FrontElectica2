import { Routes } from '@angular/router';
import {MenuManualAdminsComponent} from "./menu-manual-admins/menu-manual-admins.component";
import {MenuEstudiantesComponent} from "./menu-estudiantes/menu-estudiantes.component";
import {MenuDocentesComponent} from "./menu-docentes/menu-docentes.component";
import {MenuPracticasComponent} from "./menu-practicas/menu-practicas.component";
import {MenuEmpresasComponent} from "./menu-empresas/menu-empresas.component";

export const routes: Routes = [
  { path: '', redirectTo: '/menu-manual-admins', pathMatch: 'full' },
  { path: 'menu-manual-admins', component: MenuManualAdminsComponent},
  { path: 'menu-estudiantes', component: MenuEstudiantesComponent},
  { path: 'menu-docentes', component: MenuDocentesComponent},
  { path: 'menu-practicas', component: MenuPracticasComponent},
  { path: 'menu-empresas', component: MenuEmpresasComponent}
];
