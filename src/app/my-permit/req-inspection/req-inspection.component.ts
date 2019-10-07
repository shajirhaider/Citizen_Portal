import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-req-inspection',
  templateUrl: './req-inspection.component.html',
  styleUrls: ['./req-inspection.component.css']
})
export class ReqInspectionComponent implements OnInit {

  inspectionJson = [
    {
      "name" : "Air Barrier Inspection",
      "status" : "Open",
      "scheduleDate":"",
      "time":"",
      "comment":""
    },
    {
      "name" : "Final Inspection",
      "status" : "Open",
      "scheduleDate":"",
      "time":"",
      "comment":""
    },
    {
      "name" : "Final Plumbing Inspection",
      "status" : "Open",
      "scheduleDate":"",
      "time":"",
      "comment":""
    },
    {
      "name" : "Fire Separation Inspection",
      "status" : "Open",
      "scheduleDate":"",
      "time":"",
      "comment":""
    }
  ]

  timeList =[
    {text:"AM", value:"am"},
    {text:"PM", value:"pm"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
