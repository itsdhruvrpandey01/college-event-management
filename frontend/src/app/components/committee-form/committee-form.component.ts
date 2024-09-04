// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommitteeService } from '../committee.service';

// @Component({
//   selector: 'app-committee-form',
//   templateUrl: './committee-form.component.html',
//   styleUrls: ['./committee-form.component.css']
// })
// export class CommitteeFormComponent {
//   committeeData = {
//     startDate: '',
//     endDate: '',
//     pricePool: '',
//     teamSize: '',
//     competitionName: '',
//     description: ''
//   };

//   constructor(private committeeService: CommitteeService, private router: Router) {}

//   onSubmit() {
//     this.committeeService.setCommitteeData(this.committeeData);
//     // this.router.navigate(['/about']); // Navigate to About Section
//     console.log(this.committeeData);
//   }
// }

// committee-form.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommitteeService } from '../committee.service';

@Component({
  selector: 'app-committee-form',
  templateUrl: './committee-form.component.html',
  styleUrls: ['./committee-form.component.css']
})
export class CommitteeFormComponent {
  committeeData = {
    startDate: '',
    endDate: '',
    pricePool: '',
    teamSize: '',
    competitionName: '',
    description: ''
  };

  constructor(private committeeService: CommitteeService, private router: Router) {}

  onSubmit() {
    this.committeeService.setCommitteeData(this.committeeData);
    // this.router.navigate(['/about']); // Navigate to About Section
    console.log(this.committeeData);
  }
}
