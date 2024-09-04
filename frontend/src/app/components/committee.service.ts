import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {
  private committeeData = {};

  setCommitteeData(data: any) {
    this.committeeData = data;
  }

  getCommitteeData() {
    return this.committeeData;
  }
}
