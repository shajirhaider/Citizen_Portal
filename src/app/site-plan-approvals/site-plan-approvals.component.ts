import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-plan-approvals',
  templateUrl: './site-plan-approvals.component.html',
  styleUrls: ['./site-plan-approvals.component.css']
})
export class SitePlanApprovalsComponent implements OnInit {

  address: String = "700 Hespeler Rd N3H 5L8";
  headers: Object= [
    {text:"RSN"  },
    {text:"Folder#"  },
    {text:"Type/Sub/Work"},
    {text:"Status"},
    {text:"Date Application Received"},
    {text:"Date Application Issued/Approved"},
    {text:"Date File Closed"}
  ];

  datas: Object = [
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"Restaurant",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"Fascia Sign",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"30 Days",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    { 
      folderRSN:"4610",
      folderNumber:"97 000362 000 00 DP",
      folderTypeDesc:"Demolition Permit",
      subCodeDesc:"0",
      workCodeDesc:"Demolition",
      statusDesc:"Closed",
      indate:"1997-04-21",
      issueDate:"1997-04-29",
      finalDate:"1997-05-09"
    },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
