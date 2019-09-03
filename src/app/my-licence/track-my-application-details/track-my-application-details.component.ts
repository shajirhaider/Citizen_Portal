import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-my-application-details',
  templateUrl: './track-my-application-details.component.html',
  styleUrls: ['./track-my-application-details.component.css']
})
export class TrackMyApplicationDetailsComponent implements OnInit {

  currentLicense:any = {}
  isUpdateInfo = false
  constructor() { }

  ngOnInit() {
  }

}
