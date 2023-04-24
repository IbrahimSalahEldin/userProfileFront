import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

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
    AppRoutingModule,
    TableModule,
    MultiSelectModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
