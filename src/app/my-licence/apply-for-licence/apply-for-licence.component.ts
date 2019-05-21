import { Component, OnInit } from '@angular/core';
import { bypassSanitizationTrustResourceUrl } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'app-apply-for-licence',
  templateUrl: './apply-for-licence.component.html',
  styleUrls: ['./apply-for-licence.component.css']
})
export class ApplyForLicenceComponent implements OnInit {
  tabOrder:number = 3;
  formJson =[
    {
      "tabname": "New Application for a License",
      "tabID": "1",
      "taborder": 1,
      "nextbuttonlabel": "Next",
      "previousbuttonlabel": "Previous",
      "controls": [
        {
          "controltype": "select",
          "label": "Application Type",
          "selectedvalue": "",
          "onChange": true,
          "hasChild":true,
          "options": [
            {
              "text": "Backflow Device Tester",
              "value": "Backflow"
            },
            {
              "text": "Drain Layer",
              "value": "Drain"
            },
            {
              "text": "Drain Layer Contrator/Drain Layer",
              "value": "Contrator"
            }
          ]
        },
        {
          "controltype": "select",
          "label": "Application Subtype",
          "selectedvalue": "M",
          "hasParent":true,
        }
      ]
    },
    {
      "tabname": "Disclosure",
      "tabID": "2",
      "taborder": 2,
      "nextbuttonlabel": "Continue to Application",
      "previousbuttonlabel": "Previous",
      "controls": [
        {
          "controltype": "label",
          "html":true,
          "label": "You are about to submit an application for a Drain Layer. The City of Cambridge licenses, regulates and governs Drain Layer within the City. It is strongly recommended that any applicant for a trade license review the By-Law in its entirety. <br> Please click the check box for each item to verify that you accept and have all of the following in order to continue to the application: <br>",
          "sortorder": 1
        },
        {
          "controltype": "checkbox",
          "html":true,
          "label": '<label>Ensure your personal account information is accurate, as that is the information that will be used for the applicant of this Trade License application. <font style="color:red;">*</font> </label>',
          "sortorder": 2
        },
        {
          "controltype": "checkbox",
          "html":true,
          "label": "Your credit card available, as payment must be made online for an online Trade License application. <font style='color:red;'>*</font>",
          "sortorder": 3
        },
        {
          "controltype": "checkbox",
          "html":true,
          "label": "Trade License applications will be discarded if not completed and paid for within 5 business days of start of application.<font style='color:red;'>*</font>",
          "sortorder": 4
        }
      ]
    },
    {
      "tabname": "Licensee",
      "tabID": "3",
      "taborder": 3,
      "nextbuttonlabel": "Continue",
      "previousbuttonlabel": "Previous",
      "controls": [
        {
          "controltype": "radiobutton",
          "label": "Are you a licensee If no, please select a licensee. <font style='color:red;'>*</font>",
          "selectedvalue": "No",
          "options": [
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
          "controltype": "input",
          "label": "Licensee Name",
          "selectedvalue": ""
        },
        {
          "controltype": "button",
          "label": "Clear"
        },
        {
          "controltype": "button",
          "label": "Find Licensee"
        },
      ]
    },
    {
      "tabname": "Backflow Tester",
      "tabID": "4",
      "taborder": 4,
      "nextbuttonlabel": "Continue",
      "previousbuttonlabel": "Previous",
      "controls": [
        {
          "controltype": "radiobutton",
          "label": "Are you an backflow tester? If no, please select a backflow tester.<font style='color:red;'>*</font>",
          "selectedvalue": "No",
          "options": [
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
          "controltype": "input",
          "label": "First Name",
          "selectedvalue": ""
        },
        {
          "controltype": "input",
          "label": "Last Name",
          "selectedvalue": ""
        },
        {
          "controltype": "button",
          "label": "Clear"
        },
        {
          "controltype": "button",
          "label": "Find Tester"
        },
        {
          "controltype": "button",
          "label": "Find Licensee"
        }
      ]
    },
    {
      "tabname": "Confirm the following details",
      "tabID": "5",
      "taborder": 5,
      "nextbuttonlabel": "Confirm",
      "previousbuttonlabel": "Previous",
      "controls": [
        {
          "controltype": "text-info",
          "label": "License Type:",
          "selectedvalue": "Backflow Device Tester"
        },
        {
          "controltype": "text-info",
          "label": "License Subtype:",
          "selectedvalue": "Backflow Device Tester"
        },
        {
          "controltype": "text-info",
          "label": "Applicant:",
          "selectedvalue": "Region of Waterloo Hanif Mohammad"
        },
        {
          "controltype": "text-info",
          "label": "Backflow Tester:",
          "selectedvalue": "Region of Waterloo Hanif Mohammad"
        },
        {
          "controltype": "text-info",
          "label": "Licensee:",
          "selectedvalue": "Region of Waterloo Hanif Mohammad"
        }
      ]
    },
  ]
  a = 'M';
  b = '1';
  subType=[];
  backFlowSub=[
    {
      "text": "Blackflow Device Tester",
      "value": "1"
    }
  ];
  drainLayer=[
    {
      "text": "Drain Tester",
      "value": "2"
    }
  ];
  drainLayerContrator=[
    {
      "text": "Drain Layer Contrator",
      "value": "3"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  nextTab(){
    this.tabOrder= this.tabOrder+1;
  }

  previousTab(){
    this.tabOrder= this.tabOrder-1;
  }

  getSubType(event){
    let val =  event.target.value;
    console.log(val)
    if(val == 'Backflow'){
      this.subType = this.backFlowSub
    }else if (val == "Contrator"){
      this.subType = this.drainLayerContrator
    }else if (val == "Drain"){
      this.subType = this.drainLayer
    }
  }
}
