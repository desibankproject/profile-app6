import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      component: DashboardComponent,
      path: "dashbaord"
  },
  {
    component: LoginComponent,
    path: "login"
},
  {
      component: LoginComponent,
      path: "**"
  },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
