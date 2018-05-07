import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { InventoryService } from './services/inventory.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { PatientProfileService } from './services/patient.profile.service';
import { AppointmentService } from './services/appointment.service';
import { EmployeeService } from './services/employee.service';
import { BillingService } from './services/billing.service';
import { SupportService } from './services/support.service';
import { SuppliesService } from './services/supplies.service';
import { FilterSortService } from './services/filtersort';
import { AlertService } from './services/alert.service';
import { ApiService } from './services/ztest.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/edit.profile/edit.profile.component';
import { LoginComponent } from './pages/login/login.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { DocsComponent } from './pages/docs/docs.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { RegisterComponent } from './pages/register/register.component';
import { PayComponent } from './pages/pay/pay.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ThankYouComponent } from './pages/thank.you/thank.you.component';
import { SupportComponent } from './pages/support/support.component';
import { PasswordChangeComponent } from './pages/password.change/password.change.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { PatientComponent } from './pages/patient/patient.component';
import { PatientProfileComponent } from './pages/patient/patient.profile/patient.profile.component';
import { PatientBillComponent } from './pages/patient/patient.bill/patient.bill.component';
import { PatientAppointmentComponent } from './pages/patient/patient.appointment/patient.appointment.component';
import { ZtestComponent } from './pages/ztest/ztest.component';
import { AlertComponent } from './alert.component';

import { AccountingComponent } from './pages/accounting/accounting.component';
import { GeneraljournalComponent } from './pages/accounting/generaljournal/generaljournal.component';
import { DeleteItemComponent } from './pages/accounting/delete-item/delete-item.component';
import { LoadComponentModule } from './pages/common/load-component/load-component.module';
import { OverlayModule } from './pages/common/overlay/overlay.module';
import { FinanceService } from './pages/accounting/accounting.service';
import { JournalFinanceService } from './pages/accounting/generaljournal/generaljournal.service';
import { LogoutComponent } from './pages/accounting/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    EditProfileComponent,
    LoginComponent,
    FaqsComponent,
    DocsComponent,
    InventoryComponent,
    RegisterComponent,
    DeleteItemComponent,
    LogoutComponent,
    SuppliesComponent,
    PatientComponent,
    PatientProfileComponent,
    PatientBillComponent,
    PatientAppointmentComponent,
    PasswordChangeComponent,
    AlertComponent,
    AccountingComponent,
    GeneraljournalComponent,
    ScheduleComponent,
    PayComponent,
    ThankYouComponent,
    SupportComponent,
    ZtestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OverlayModule,
    LoadComponentModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    Title,
    AuthenticationService,
    AuthGuardService,
    FinanceService,
    JournalFinanceService,
    PatientProfileService,
    AppointmentService,
    EmployeeService,
    BillingService,
    SupportService,
    SuppliesService,
    FilterSortService,
    InventoryService,
    AlertService,
    ApiService,
  ],

  entryComponents: [DeleteItemComponent, LogoutComponent],

  bootstrap: [AppComponent],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
