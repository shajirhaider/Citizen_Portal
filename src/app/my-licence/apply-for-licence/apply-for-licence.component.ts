import { Component, OnInit } from '@angular/core';
import { bypassSanitizationTrustResourceUrl } from '@angular/core/src/sanitization/bypass';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-apply-for-licence',
  templateUrl: './apply-for-licence.component.html',
  styleUrls: ['./apply-for-licence.component.css']
})
export class ApplyForLicenceComponent implements OnInit {
  tabOrder:number = 1;
  formJson =[
    {
      "tabname": "New Application for a License",
      "tabID": "1",
      "taborder": 1,
      "isValidated":false,
      "nextbuttonlabel": "Next",
      "previousbuttonlabel": "Previous",
      "controls": [
        {
          "controltype": "select",
          "label": "Application Type",
          "controlID": "applicationType",
          "childControlIds":["applicationSubtype"],
          "selectedvalue": "",
          "onChange": true,
          "hasChild":true,
          "isRequried":true,
          "hasError":false,
          "errorText":"Application Type is required",
          "toolTipText":"Application Type",
          "placeholderText":"Select Application Type",
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
          "controlID":"abcd",
          "onChange": true,
          "parentcontrolIDs":["applicationType"],
          "selectedvalue": "",
          "hasParent":true,
          "hasChild":true,
          "isRequried":true,          
          "hasError":false,
          "serviceMethodName":"getApplicationSubType",
          "serviceParameters":{
            "applicationType":"",
          },
          "options": [],
        },
        {
          "controltype": "select",
          "label": "Application Subtype",
          "controlID":"applicationSubtype",
          "parentcontrolIDs":["applicationType", "abcd"],
          "selectedvalue": "",
          "hasParent":true,
          "isRequried":true,          
          "hasError":false,
          "serviceMethodName":"getApplicationSubType",
          "serviceParameters":{
            "applicationType":"",
            "adcd":"",
          },
          "options": [],
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
          "controlID":"submitAppMsg",
          "html":true,
          "label": "You are about to submit an application for a {{replaceString}}. The City of Cambridge licenses, regulates and governs Drain Layer within the City. It is strongly recommended that any applicant for a trade license review the By-Law in its entirety. <br> Please click the check box for each item to verify that you accept and have all of the following in order to continue to the application: <br>",
          "sortorder": 1,
        },
        {
          "controltype": "checkbox",
          "html":true,
          "controlID":"infoCheckBox",
          "selectedvalue": "",
          "label": '<label>Ensure your personal account information is accurate, as that is the information that will be used for the applicant of this Trade License application. <font style="color:red;">*</font> </label>',
          "sortorder": 2,
          "isRequried":true,
        },
        {
          "controltype": "checkbox",
          "html":true,
          "controlID":"creditCardCheckBox",
          "selectedvalue": "",
          "label": "Your credit card available, as payment must be made online for an online Trade License application. <font style='color:red;'>*</font>",
          "sortorder": 3,
          "isRequried":true,
        },
        {
          "controltype": "checkbox",
          "html":true,
          "controlID":"tradeLicenseCheckBox",
          "selectedvalue": "",
          "label": "Trade License applications will be discarded if not completed and paid for within 5 business days of start of application.<font style='color:red;'>*</font>",
          "sortorder": 4,
          "isRequried":true,
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
          "controlID":"licensee",
          "label": "Are you a licensee If no, please select a licensee. <font style='color:red;'>*</font>",
          "selectedvalue": "",
          "isRequried":true,
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
          "controlID":"licenseeName",
          "label": "Licensee Name",
          "selectedvalue": ""
        },
        {
          "controltype": "button",
          "controlID":"tab3Clear",
          "label": "Clear"
        },
        {
          "controltype": "button",
          "controlID":"tab3FindLicensee",
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
          "controlID":"radioBtnTester",
          "label": "Are you an backflow tester? If no, please select a backflow tester.<font style='color:red;'>*</font>",
          "selectedvalue": "No",
          "isRequried":true,
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
          "controlID":"tab4FirstName",
          "label": "First Name",
          "selectedvalue": ""
        },
        {
          "controltype": "input",
          "controlID":"tab4LastName",
          "label": "Last Name",
          "selectedvalue": ""
        },
        {
          "controltype": "button",         
          "controlID":"tab4Clear",
          "label": "Clear"
        },
        {
          "controltype": "button",         
          "controlID":"tab3FindTester",
          "label": "Find Tester"
        },
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
          "controlID":"licenseType",
          "label": "License Type:",
          "selectedvalue": "Backflow Device Tester"
        },
        {
          "controltype": "text-info",
          "label": "License Subtype:",          
          "controlID":"licenseSubtype",
          "selectedvalue": "Backflow Device Tester"
        },
        {
          "controltype": "text-info",
          "controlID":"applicant",
          "label": "Applicant:",
          "selectedvalue": "Region of Waterloo Hanif Mohammad"
        },
        {
          "controltype": "text-info",
          "controlID":"backflowTester",
          "label": "Backflow Tester:",
          "selectedvalue": "Region of Waterloo Hanif Mohammad"
        },
        {
          "controltype": "text-info",
          "controlID":"licensee",
          "label": "Licensee:",
          "selectedvalue": "Region of Waterloo Hanif Mohammad"
        }
      ]
    },
    {
      "tabname": "License Infromation",
      "tabID": "6",
      "taborder": 6,
      "nextbuttonlabel": "Next",
      "previousbuttonlabel": "",
      "controls": [
        {
          "controltype": "input",
          "controlID":"testerCertificateNo",
          "label": "Tester Certificate #",
          "selectedvalue": ""
        },
        {
          "controltype": "datePicker",
          "controlID":"expiryDate",
          "label": "Expiry Date",
          "selectedvalue": ""
        },
        {
          "controltype": "input",
          "controlID":"masterExamLocation",
          "label": "Master Exam Location",
          "selectedvalue": ""
        },
        {
          "controltype": "input",
          "controlID":" tradesMembershipNo",
          "label": "Ontario College of Trades Membership Number:",
          "selectedvalue": ""
        },
        {
          "controltype": "radiobutton",
          "controlID":"showContractorsList",
          "label": "Show on Contractors List? <font style='color:red;'>*</font>",
          "selectedvalue": "",
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
          "controltype": "select",
          "controlID":"approvedSystems",
          "label": "Approved Systems:  <font style='color:red;'>*</font>",
          "selectedvalue": "",
          "options": [
            {
              "text": "All Systems",
              "value": "No"
            },
            {
              "text": "Fire Protection Equipment Only",
              "value": "Yes"
            },
            {
              "text": "Lawn Irrigation Systems Only",
              "value": "Yes"
            }
          ]
        },
        {
          "controltype": "datePicker",
          "controlID":"calibrationCertificateDate",
          "label": "Calibration Certificate Date",
          "selectedvalue": ""
        },
        {
          "controltype": "datePicker",
          "controlID":"insuranceExpiryDate",
          "label": "Insurance Expiry Date",
          "selectedvalue": ""
        }
      ]
    }
  ]
  replaceString = "test";
  nextTab = false;

  constructor() { }

  ngOnInit() {
  }
  procedeToNextTab(val){
    let result = []
    for(var vl of val.controls) {
      if(vl.hasOwnProperty("isRequried")){       
        // result = val.controls.map(a => a.selectedvalue); 
        result.push(vl.selectedvalue)
        console.log(result)      
      }
    }
    for(var i = 0; i < result.length; i++) {
      if (result[i] === "" || result[i] === false)  {
        this.nextTab = false 
        break;
      }
      else{         
        this.nextTab = true
      }  
    }
    if(this.nextTab === true){
      this.tabOrder = this.tabOrder+1;
    }

  }

  procedeToPreviousTab(){
    this.tabOrder= this.tabOrder-1;
  }
  getChildList(tab){
    let selectedValue:any[] = [];
    let result = true;
    for(var element of tab.controls) {
      if(element.hasOwnProperty("parentcontrolIDs") && element.selectedvalue === ""){
        element.parentcontrolIDs.forEach(parId => {
          tab.controls.forEach(el => {
            if(parId === el.controlID){
              if(el.selectedValue !==""){
                let b = el.selectedvalue
                selectedValue.push(b)
              }
            }
          });
        });
        for (const [index, [key, value]] of Object.entries(Object.entries(element.serviceParameters))) {
          element.serviceParameters[key] = selectedValue[index]
        }
       
        Object.keys(element.serviceParameters).forEach(function(key) {
          if (element.serviceParameters[key] == "") {
           result = false
          }
        });
        if( result === true){
          return element.options = this.getApplicationSubType(element)
        }  
      }  
    }
  }

  getApplicationSubType(obj){
    console.log(obj)
    return [
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
    // value.forEach(element => {
    //   obj.serviceParameters =  obj.serviceParameters.map(function(credential){
                
    //       return credential;
    //   })
    // });
   
    
  }

}
