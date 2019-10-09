import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-an-issue',
  templateUrl: './report-an-issue.component.html',
  styleUrls: ['./report-an-issue.component.css']
})
export class ReportAnIssueComponent implements OnInit {

  phoneNoList = [
    {
      issueType : "Illegal Parking",
      businessHr:"519-747-8785",
      afterHr : "519-570-9777"
    },  
    {
      issueType : "Noise",
      businessHr:"519-747-8785",
      afterHr : "519-570-9777"
    },
    {
      issueType : "Other Issues",
      businessHr:"519-747-8785",
      afterHr : "519-570-9777"
    },
  ];
  value = ""

  constructor() { }

  ngOnInit() {
  }

}
