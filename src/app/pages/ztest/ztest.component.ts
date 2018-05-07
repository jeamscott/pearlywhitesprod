import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../../services/authentication.service';
import { SupportService } from '../../services/support.service';
import { FilterSortService } from '../../services/filtersort';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../../services/ztest.service';

@Component({
  templateUrl: './ztest.component.html'
})
export class ZtestComponent {
  details: UserDetails;
  patientsSub: Subscription;
  supportProfile;
  filteredProfile;
  query: '';

  constructor(private auth: AuthenticationService, public supportService: SupportService, public fs: FilterSortService, public api: ApiService) {}

  ngOnInit() {
    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });

    this._getPatientProfiles()
  }

  private _getPatientProfiles() {
    this.patientsSub = this.api
                          .getEvents$()
                          .subscribe(
                            res => {
                              console.log(res)
                              this.supportProfile = res;
                              this.filteredProfile = res;
                            },
                            err => {
                              console.error(err);

                            }
                          )
  }

  searchPatients() {
    this.filteredProfile = this.fs.search(this.supportProfile, this.query, '_id');
  }

  resetQuery() {
    this.query = '';
    this.filteredProfile = this.supportProfile;
  }
}