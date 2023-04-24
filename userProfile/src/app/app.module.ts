import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { dashboardComponent } from './componets/admin/dashbord/dashbord.component';
import { LoginComponent } from './componets/auth/login/login.component';
import { UesrProfileComponent } from './componets/user/uesr-profile/uesr-profile.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    dashboardComponent,
    LoginComponent,
    UesrProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
