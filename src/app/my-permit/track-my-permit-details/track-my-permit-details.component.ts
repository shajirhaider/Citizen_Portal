import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-my-permit-details',
  templateUrl: './track-my-permit-details.component.html',
  styleUrls: ['./track-my-permit-details.component.css']
})
export class TrackMyPermitDetailsComponent implements OnInit {

  currentLicense:any = {}
  isUpdateInfo = false
  constructor() { }

  ngOnInit() {
  }
}
