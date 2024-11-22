import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { CustomerComponent } from './layouts/customer/customer.component';
import { ManagerComponent } from './layouts/manager/manager.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddBikesComponent } from './components/add-bikes/add-bikes.component';
import { AvailableBikesComponent } from './components/available-bikes/available-bikes.component';
import { CustomerRentalsComponent } from './components/customer-rentals/customer-rentals.component';
import { MrentalRequestComponent } from './components/mrental-request/mrental-request.component';
import { CusavailableBikesComponent } from './components/cusavailable-bikes/cusavailable-bikes.component';
import { CusmyRentalsComponent } from './components/cusmy-rentals/cusmy-rentals.component';
import { CusmyrentalRequestsComponent } from './components/cusmyrental-requests/cusmyrental-requests.component';
import { MorderHistoryComponent } from './components/morder-history/morder-history.component';
import { CusorderHistoryComponent } from './components/cusorder-history/cusorder-history.component';
import { RouterLink, RouterModule } from '@angular/router';
import {  HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MeditBikeComponent } from './components/medit-bike/medit-bike.component';
import { McustomerDetailComponent } from './components/mcustomer-detail/mcustomer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    CustomerComponent,
    ManagerComponent,
    LoginComponent,
    RegisterComponent,
    AddBikesComponent,
    AvailableBikesComponent,
    CustomerRentalsComponent,
    MrentalRequestComponent,
    CusavailableBikesComponent,
    CusmyRentalsComponent,
    CusmyrentalRequestsComponent,
    MorderHistoryComponent,
    CusorderHistoryComponent,
    MeditBikeComponent,
    McustomerDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    provideClientHydration(), provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

