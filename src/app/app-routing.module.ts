import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBikesComponent } from './components/add-bikes/add-bikes.component';
import { AvailableBikesComponent } from './components/available-bikes/available-bikes.component';
import { CustomerRentalsComponent } from './components/customer-rentals/customer-rentals.component';
import { MorderHistoryComponent } from './components/morder-history/morder-history.component';
import { CusavailableBikesComponent } from './components/cusavailable-bikes/cusavailable-bikes.component';
import { CusmyRentalsComponent } from './components/cusmy-rentals/cusmy-rentals.component';
import { CusmyrentalRequestsComponent } from './components/cusmyrental-requests/cusmyrental-requests.component';
import { CusorderHistoryComponent } from './components/cusorder-history/cusorder-history.component';
import { MrentalRequestComponent } from './components/mrental-request/mrental-request.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomerComponent } from './layouts/customer/customer.component';
import { ManagerComponent } from './layouts/manager/manager.component';

const routes: Routes = [

   { path: 'Manager' , component: ManagerComponent},
  
   { path: 'addBike', component: AddBikesComponent },
   { path: 'MrentalRequest' , component: MrentalRequestComponent},
   { path: 'MordHistory' , component: MorderHistoryComponent},
   { path: 'availableBike', component: AvailableBikesComponent},
   { path: 'cusRental', component:CustomerRentalsComponent},
  
   { path: 'Customer' , component:CustomerComponent},

   { path: 'CusavaiBikes' , component: CusavailableBikesComponent },
   { path: 'CusmyRentals', component: CusmyRentalsComponent},
   { path: 'CusmyrentalRequest' , component: CusmyrentalRequestsComponent},
   { path: 'CusorderHistory' , component:CusorderHistoryComponent},

   { path: 'Login' , component: LoginComponent},
   { path: 'Register', component: RegisterComponent}
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }