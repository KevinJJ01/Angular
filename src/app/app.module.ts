import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistoComponent } from './registo/registo.component';
import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistoComponent,
    RecuperarPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
