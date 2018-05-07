import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { PatientProfileService } from './services/patient.profile.service';
import { AppointmentService } from './services/appointment.service';
import { EmployeeService, Employee } from './services/employee.service';
import { HttpResponse, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  employee: Employee;
  error: HttpErrorResponse;

  constructor(public auth: AuthenticationService, public patient: PatientProfileService, public appointment: AppointmentService, public employeeService: EmployeeService) {}

  ngOnInit() {

    this.employeeService.employed().subscribe(profile => {
      this.employee = profile;
    }, error => this.error = error
    );

  }

}
