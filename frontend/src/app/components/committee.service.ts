// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CommitteeService {
//   private committeeData = {};

//   setCommitteeData(data: any) {
//     this.committeeData = data;
//   }

//   getCommitteeData() {
//     return this.committeeData;
//   }
// }
// committee.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {
  private committeeDataSubject = new BehaviorSubject<any>(null);
  committeeData$ = this.committeeDataSubject.asObservable();

  setCommitteeData(data: any) {
    this.committeeDataSubject.next(data);
  }

  getCommitteeData() {
    return this.committeeDataSubject.asObservable();
  }
}
