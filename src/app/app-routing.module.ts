import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/empleados',
    pathMatch: 'full'
    
  },
  {
    path: 'empleados',
    component: EmpleadoListComponent
  },
  {
    path: 'empleados/add',
    component: EmpleadoFormComponent
  },
  {
    path: 'empleados/edit/:id',
    component: EmpleadoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
