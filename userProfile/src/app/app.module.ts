import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './componets/admin/dashbord/dashbord.component';
import { LoginComponent } from './componets/auth/login/login.component';
import { UesrProfileComponent } from './componets/user/uesr-profile/uesr-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    LoginComponent,
    UesrProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
