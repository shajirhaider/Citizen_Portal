import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../../services/local-storage.service'
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
        // {
        //   "controltype": "select",
        //   "label": "Application Subtype",
        //   "controlID":"abcd",
        //   "onChange": true,
        //   "parentcontrolIDs":["applicationType"],
        //   "selectedvalue": "",
        //   "hasParent":true,
        //   "hasChild":true,
        //   "isRequried":true,          
        //   "hasError":false,
        //   "errorText":"Application Type is required",
        //   "toolTipText":"Application Type",
        //   "placeholderText":"Select Application Type",
        //   "serviceMethodName":"getApplicationSubType",
        //   "serviceParameters":{
        //     "applicationType":"",
        //   },
        //   "options": [],
        // },
        {
          "controltype": "select",
          "label": "Application Subtype",
          "controlID":"applicationSubtype",
          "parentcontrolIDs":["applicationType", "abcd"],
          "selectedvalue": "",
          "hasParent":true,
          "isRequried":true,          
          "hasError":false,
          "errorText":"Application Subtype is required",
          "toolTipText":"Application Subtype",
          "placeholderText":"Select Application Subtype",
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
          "controltype": "radiobuttonOnChange",
          "controlID":"licensee",
          "label": "Are you a licensee If no, please select a licensee. <font style='color:red;'>*</font>",
          "selectedvalue": "No",
          "onChange":"true",
          "isRequried":true,
          "hasError":false,        
          "errorText":"This is required",
          "toolTipText":"Application Type",
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
          "controltype": "autoComplete",
          "controlID":"licenseeName",
          "parentcontrolID":"licensee",
          "expectedParentsValue":"No",
          "label": "Licensee Name",
          "selectedvalue": "",
          "hasError":false,
          "isHidden":false,
          "errorText":" Licensee Name is required",
          "toolTipText":"Application Type",
          "placeholderText":"Enter Licensee Name",
          "serviceMethodName":"getLicenseeName",
          "serviceParameters":{
            "searchValue":"", // selected value of this control
          },
          "options": [],
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
          "controltype": "radiobuttonOnChange",
          "controlID":"radioBtnTester",
          "label": "Are you an backflow tester? If no, please select a backflow tester.<font style='color:red;'>*</font>",
          "selectedvalue": "No",
          "isRequried":true,
          "hasError":false,
          "errorText":" This is required",
          "toolTipText":"Application Type",
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
          "controltype": "autoComplete",
          "controlID":"tab4FirstName",
          "parentcontrolID":"radioBtnTester",
          "expectedParentsValue":"No",
          "isHidden":false,
          "label": "First Name",
          "selectedvalue": "",
          "hasError":false,        
          "errorText":"First Name is required",
          "toolTipText":"Application Type",
          
        },
        {
          "controltype": "autoComplete",
          "controlID":"tab4LastName",
          "parentcontrolID":"radioBtnTester",
          "expectedParentsValue":"No",
          "isHidden":false,
          "label": "Last Name",
          "selectedvalue": "",
          "hasError":false,     
          "errorText":"Last Name is required",
          "toolTipText":"Application Type",
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
          "otherControlID":"applicationType",
          "valueFromOtherControl":true,
          "selectedvalue": ""
        },
        {
          "controltype": "text-info",
          "label": "License Subtype:",          
          "controlID":"licenseSubtype",      
          "otherControlID":"applicationType",
          "valueFromOtherControl":true,
          "selectedvalue": ""
        },
        {
          "controltype": "text-info",
          "controlID":"applicant",
          "label": "Applicant:",
          "selectedvalue": this.storage.getItem('username')
        },
        {
          "controltype": "text-info",
          "controlID":"backflowTester",
          "label": "Backflow Tester:",          
          "otherControlID":"tab4FirstName",
          "valueFromOtherControl":true,
          "selectedvalue": ""
        },
        {
          "controltype": "text-info",
          "controlID":"licensee",
          "label": "Licensee:",         
          "otherControlID":"licenseeName",
          "valueFromOtherControl":true,
          "selectedvalue": ""
        }
      ]
    },
    {
      "tabname": "License Infromation",
      "tabID": "6",
      "taborder": 6,
      "nextbuttonlabel": "Next",
      "serviceFnName":"abcd",
      "submit":true,
      "controls": [
        {
          "controltype": "input",
          "controlID":"testerCertificateNo",
          "label": "Tester Certificate #",
          "selectedvalue": ""
        },
        {
          "controltype": "datePicker",
          "dateFormate":"yyyy-mm-dd",
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
          "isRequried":true,
          "hasError":false,        
          "errorText":"This is required",
          "toolTipText":"Application Type",
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
          "isRequried":true,
          "hasError":false,        
          "errorText":"Approved Systems is required",
          "toolTipText":"Application Type",
          "options": [
            {
              "text": "All Systems",
              "value": "All"
            },
            {
              "text": "Fire Protection Equipment Only",
              "value": "Fire Protection"
            },
            {
              "text": "Lawn Irrigation Systems Only",
              "value": "Lawn Irrigation"
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
          "selectedvalue": "",
        }
      ]
    }
  ]
  replaceString = "test";
  nextTab = false;

  constructor(private storage : LocalStorageService ) { }

  ngOnInit() {}

  procedeToNextTab(val){
    let result = []
    for(var vl of val.controls) {
      if(vl.hasOwnProperty("isRequried")){   
        if(vl.selectedvalue === ""){
          vl.hasError = true
        }else{
          vl.hasError = false
        }    
        result.push(vl.selectedvalue) 
      }
      if(vl.hasOwnProperty("isHidden") ){   
        if( vl.isHidden === false){         
          if(vl.selectedvalue === ""){
            vl.hasError = true            
            result.push(vl.selectedvalue) 
          }else{
            vl.hasError = false
          } 
        }   
      }
      console.log(result)
    }
    for(var i = 0; i < result.length; i++) {
      if (result[i] === "" || result[i] === false){
        this.nextTab = false 
        break;
      }
      else{         
        this.nextTab = true
      }  
    }
    if(this.nextTab === true){
      this.tabOrder = this.tabOrder+1;
      val.controls.forEach((item) => item.hasError = false);
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
   
    
  }

  controlIsHidden(tab){
    tab.controls.forEach(element => {
      if (element.hasOwnProperty("isHidden")){
        
        for(var el of tab.controls){
          if (element.parentcontrolID === el.controlID){
            if(element.expectedParentsValue === el.selectedvalue){
              element.isHidden = true
            }else{
              element.isHidden = false
            }
          }
        }

      }
    });

  }

  valueFromOtherControl(control){
    
    if(control.hasOwnProperty("valueFromOtherControl") ){  
      for(var vl of this.formJson) {
        for(var el of vl.controls){       
          if( control.otherControlID === el.controlID){
            if(el.selectedvalue == ""){             
              return  control.selectedvalue = this.storage.getItem('username')
            }else{
              return  control.selectedvalue = el.selectedvalue
            }
          }
        } 
      }
    }
  }

}
