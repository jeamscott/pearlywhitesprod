import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { AlertComponent } from './alert.component';
import { ZtestComponent } from './pages/ztest/ztest.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';

import { AccountingComponent } from './pages/accounting/accounting.component';
import { GeneraljournalComponent } from './pages/accounting/generaljournal/generaljournal.component';
import { DeleteItemComponent } from './pages/accounting/delete-item/delete-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuardService] },
  { path: 'pay', component: PayComponent, canActivate: [AuthGuardService] },
  { path: 'edit.profile', component: EditProfileComponent, canActivate: [AuthGuardService] },
  { path: 'thank.you', component: ThankYouComponent, canActivate: [AuthGuardService] },
  { path: 'support', component: SupportComponent, canActivate: [AuthGuardService] },
  { path: 'password.change', component: PasswordChangeComponent, canActivate: [AuthGuardService] },
  { path: 'accounting', component: AccountingComponent },
  { path: 'generaljournal/generaljournal', component: GeneraljournalComponent },
  { path: 'supplies', component: SuppliesComponent},
  { path: 'patient/:id', component: PatientComponent, canActivate: [AuthGuardService] },
  { path: 'patient/patient.profile', component: PatientProfileComponent, canActivate: [AuthGuardService] },
  { path: 'alert.component', component: AlertComponent},
  { path: 'ztest', component: ZtestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
