import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-for-permit',
  templateUrl: './apply-for-permit.component.html',
  styleUrls: ['./apply-for-permit.component.css']
})
export class ApplyForPermitComponent implements OnInit {
    tabOrder:number = 1;
    formJson =[
    {
      "tabname": "Disclosure",
      "tabID": "1",
      "taborder": 1,
      "nextbuttonlabel": "Continue",
      "previousbuttonlabel": "Previous",
      "controls": [
        {
          "controltype": "label",
          "label": "You are about to submit an application for a residential Deck/Porch Permit. Before you continue, please ensure the following:",
          "sortorder": 1
        },
        {
          "controltype": "checkbox",
          "label": "Your personal information is accurate. This is the information that will be used for the application of this permit submission. *",
          "sortorder": 2
        },
        {
          "controltype": "checkbox",
          "label": "You have all the required document to complete your building permit submissions. <a href='http://www.randomaccess.ca'>See List of Required Documents</a> <font style='color:red;'>*</font> <br> 	<ul> <li><b>Pay Now</b> online through a third party payment processing  service</li> 	<li><b>Pay Later</b> by forwarding payment to the building Division. Please note, payment of the building permit...</li>  </ul> ",
          "sortorder": 3
        }
      ]
    },
    {
      "tabname": "Applicant",
      "tabID": "2",
      "taborder": 2,
      "nextbuttonlabel": "Next",
      "previousbuttonlabel": "Previous",
      "controls": [
        {
          "controltype": "radiobutton",
          "label": "Are you member of the organization, applying on their behalf?",
          "selectedvalue": "No",
          "options":[
            {
              "text": "No",
              "value": "No"
            },
            {
              "text": "Yes",
              "value": "Yes"
            }
            ]
        },
        {
          "controltype": "radiobutton",
          "label": "Gender",
          "selectedvalue": "M",
          "options": [
            {
              "text": "Male",
              "value": "M"
            },
            {
              "text": "Female",
              "value": "F"
            }
          ]
        }
      ]
    }
    
  ]
  a = 'M';
  b = '1';

  constructor() { }

  ngOnInit() {
  }

  nextTab(){
    this.tabOrder= this.tabOrder+1;
  }
  previousTab(){
    this.tabOrder= this.tabOrder-1;
  }

}
