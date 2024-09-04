import { Component, OnInit } from '@angular/core';
import { CommitteeService } from '../committee.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSection implements OnInit {
  committeeData: any;

  constructor(private committeeService: CommitteeService) {}

  ngOnInit() {
    this.committeeData = this.committeeService.getCommitteeData();
    console.log('Committee Data:', this.committeeData); 
  }
}
