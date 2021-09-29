import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAppointmentComponent } from './view/create-appointment/create-appointment.component';
import { FormComponent } from './view/form/form.component';
import { GetAppointmentsComponent } from './view/get-appointments/get-appointments.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'newAppointment',
    component: CreateAppointmentComponent
  },
  {
    path: 'getAppointment',
    component: GetAppointmentsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
