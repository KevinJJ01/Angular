import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistoComponent } from './registo/registo.component';
import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'registrarse', component:RegistoComponent},
  {path:'recuperar', component:RecuperarPassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
