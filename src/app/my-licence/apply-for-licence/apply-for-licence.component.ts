import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../../services/local-storage.service'
import { HttpService } from '../../../../src/app/services/http.service';
import { UrlService } from '../../../../src/app/services/url.service';
@Component({
  selector: 'app-apply-for-licence',
  templateUrl: './apply-for-licence.component.html',
  styleUrls: ['./apply-for-licence.component.css']
})
export class ApplyForLicenceComponent implements OnInit {
  tabOrder:number = 1;
  formData:any = {}
  formData1:any ={
    tabList : [
      {
          "tabName": "New Application for a License",
          "tabID": "1",
          "tabOrder": 1,
          "nextButtonLabel": "Next",
          "controls": [
              {
                  "controlType": "select",
                  "label": "Application Type",
                  "controlID": "applicationType",
                  "childControlIds": ["applicationSubtype"],
                  "selectedValue": "",
                  "onChange": true,
                  "hasChild": true,
                  "isRequired": true,
                  "hasError": false,
                  "errorText": "Application Type is required",
                  "toolTipText": "Application Type",
                  "placeholderText": "Select Application Type",
                  "onitServiceCall": true,
                  "options": []
              },
              {
                  "controlType": "select",
                  "label": "Application Subtype",
                  "controlID": "applicationSubtype",
                  "parentcontrolIDs": ["applicationType"],
                  "selectedValue": "",
                  "hasParent": true,
                  "isRequired": true,
                  "hasError": false,
                  "errorText": "Application Subtype is required",
                  "toolTipText": "Application Subtype",
                  "placeholderText": "Select Application Subtype",
                  "serviceMethodName": "getApplicationSubType",
                  "serviceParameters": {
                      "folderType": "",
                     
                  },
                  "options": [],
              }
          ]
      },
      {
          "tabName": "Disclosure",
          "tabID": "2",
          "tabOrder": 2,
          "nextButtonLabel": "Continue to Application",
          "previousButtonLabel": "Previous",
          "controls": [
              {
                  "controlType": "label",
                  "controlID": "submitAppMsg",
                  "label": "You are about to submit an application for a {{replaceString}}. The City of Cambridge licenses, regulates and governs Drain Layer within the City. It is strongly recommended that any applicant for a trade license review the By-Law in its entirety. <br> Please click the check box for each item to verify that you accept and have all of the following in order to continue to the application:",             
              },
              {
                  "controlType": "checkbox",
                  "controlID": "infoCheckBox",
                  "selectedValue": "",
                  "label": "Ensure your personal account information is accurate, as that is the information that will be used for the applicant of this Trade License application.",             
                  "isRequired": true,
              },
              {
                  "controlType": "checkbox",
                  "controlID": "creditCardCheckBox",
                  "selectedValue": "",
                  "label": "Your credit card available, as payment must be made online for an online Trade License application. ",
                  "isRequired": true,
              },
              {
                  "controlType": "checkbox",
                  "controlID": "tradeLicenseCheckBox",
                  "selectedValue": "",
                  "label": "Trade License applications will be discarded if not completed and paid for within 5 business days of start of application.",
                  "isRequired": true,
              }
          ]
      },
      {
          "tabName": "Licensee",
          "tabID": "3",
          "tabOrder": 3,
          "nextButtonLabel": "Continue",
          "previousButtonLabel": "Previous",
          "controls": [
              {
                  "controlType": "radiobuttonOnChange",
                  "controlID": "licensee",
                  "label": "Are you a licensee If no, please select a licensee. ",
                  "selectedValue": "No",
                  "onChange": "true",
                  "isRequired": true,
                  "hasError": false,
                  "errorText": "This is required",
                  "toolTipText": "Application Type",
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
                  "controlType": "autoComplete",
                  "controlID": "licenseeName",
                  "parentcontrolID": "licensee",
                  "expectedParentsValue": "No",
                  "label": "Licensee Name",
                  "selectedValue": "",
                  "hasError": false,
                  "isHidden": false,
                  "errorText": " Licensee Name is required",
                  "toolTipText": "Application Type",
                  "placeholderText": "Enter Licensee Name",
                  "serviceMethodName": "getLicenseeName",
                  "serviceParameters": {
                      "searchValue": "",
                  },
                  "options": []
              }
          ]
      },
      {
          "tabName": "Backflow Tester",
          "tabID": "4",
          "tabOrder": 4,
          "nextButtonLabel": "Continue",
          "previousButtonLabel": "Previous",
          "controls": [
              {
                  "controlType": "radiobuttonOnChange",
                  "controlID": "radioBtnTester",
                  "label": "Are you an backflow tester? If no, please select a backflow tester.",
                  "selectedValue": "No",
                  "isRequired": true,
                  "hasError": false,
                  "errorText": " This is required",
                  "toolTipText": "Application Type",
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
                  "controlType": "autoComplete",
                  "controlID": "tab4FirstName",
                  "parentcontrolID": "radioBtnTester",
                  "expectedParentsValue": "No",
                  "isHidden": false,
                  "label": "First Name",
                  "selectedValue": "",
                  "hasError": false,
                  "errorText": "First Name is required",
                  "toolTipText": "Application Type",
                  "placeholderText": "Enter First Name",
                  "serviceMethodName": "getTesterName",
                  "serviceParameters": {
                      "searchValue": "",
                  },
                  "options": []
  
              },
              {
                  "controlType": "autoComplete",
                  "controlID": "tab4LastName",
                  "parentcontrolID": "radioBtnTester",
                  "expectedParentsValue": "No",
                  "isHidden": false,
                  "label": "Last Name",
                  "selectedValue": "",
                  "hasError": false,
                  "errorText": "Last Name is required",
                  "toolTipText": "Application Type",
                  "placeholderText": "Enter Last Name",
                  "serviceMethodName": "getTesterName",
                  "serviceParameters": {
                      "searchValue": "",
                  },
                  "options": []
              }
          ]
      },
      {
          "tabName": "Confirm the following details",
          "tabID": "5",
          "tabOrder": 5,
          "nextButtonLabel": "Confirm",
          "previousButtonLabel": "Previous",
          "controls": [
              {
                  "controlType": "text-info",
                  "controlID": "licenseType",
                  "label": "License Type:",
                  "otherControlID": "applicationType",
                  "valueFromOtherControl": true,
                  "selectedValue": ""
              },
              {
                  "controlType": "text-info",
                  "label": "License Subtype:",
                  "controlID": "licenseSubtype",
                  "otherControlID": "applicationType",
                  "valueFromOtherControl": true,
                  "selectedValue": ""
              },
              {
                  "controlType": "text-info",
                  "controlID": "applicant",
                  "label": "Applicant:",
                  "selectedValue":"Hanif",
              },
              {
                  "controlType": "text-info",
                  "controlID": "backflowTester",
                  "label": "Backflow Tester:",
                  "otherControlID": "tab4FirstName",
                  "valueFromOtherControl": true,
                  "selectedValue": ""
              },
              {
                  "controlType": "text-info",
                  "controlID": "licensee",
                  "label": "Licensee:",
                  "otherControlID": "licenseeName",
                  "valueFromOtherControl": true,
                  "selectedValue": ""
              }
          ]
      },
      {
          "tabName": "License Infromation",
          "tabID": "6",
          "tabOrder": 6,
          "nextButtonLabel": "Submit",
          "serviceFnName": "saveLicenceInfo",
          "submit": true,
          "controls": [
              {
                  "controlType": "input",
                  "controlID": "testerCertificateNo",
                  "label": "Tester Certificate #",
                  "selectedValue": "",
                  "placeholderText": "Enter Tester Certificate Number",
              },
              {
                  "controlType": "datePicker",
                  "dateFormate": "yyyy-mm-dd",
                  "controlID": "expiryDate",
                  "label": "Expiry Date",
                  "selectedValue": "",
                  "placeholderText": "dd/mm/yyyy",
                  
              },
              {
                  "controlType": "input",
                  "controlID": "masterExamLocation",
                  "label": "Master Exam Location",
                  "selectedValue": "",
                  "placeholderText": "Enter Master Exam Location",
                  
              },
              {
                  "controlType": "input",
                  "controlID": " tradesMembershipNo",
                  "label": "Ontario College of Trades Membership Number:",
                  "selectedValue": "",
                  "placeholderText": "Enter Trades Membership Number",
              },
              {
                  "controlType": "radiobutton",
                  "controlID": "showContractorsList",
                  "label": "Show on Contractors List? ",
                  "selectedValue": "",
                  "isRequired": true,
                  "hasError": false,
                  "errorText": "This is required",
                  "toolTipText": "Application Type",
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
                  "controlType": "select",
                  "controlID": "approvedSystems",
                  "label": "Approved Systems:",
                  "selectedValue": "",
                  "isRequired": true,
                  "hasError": false,
                  "onChange":false,
                  "errorText": "Approved Systems is required",
                  "toolTipText": "Application Type",
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
                  "controlType": "datePicker",
                  "controlID": "calibrationCertificateDate",
                  "label": "Calibration Certificate Date",
                  "selectedValue": "",
                  "placeholderText": "dd/mm/yyyy",
  
              },
              {
                  "controlType": "datePicker",
                  "controlID": "insuranceExpiryDate",
                  "label": "Insurance Expiry Date",
                  "selectedValue": "",
                  "placeholderText": "dd/mm/yyyy",
              }
          ] 
      }
      ]
   

  } 
  replaceString = "test";
  nextTab = false;

  constructor(
    private httpService: HttpService,
    private url: UrlService, ) { }

  ngOnInit() {
    //   this.getFormData()
    this.getForm()

  }


  procedeToNextTab(val) {
    let result = []
    for (var vl of val.controls) {
        if (vl.hasOwnProperty("isRequired")) {
            if (vl.selectedValue === "") {
                vl.hasError = true
            } else {
                vl.hasError = false
            }
            result.push(vl.selectedValue)
        }
        if (vl.hasOwnProperty("isHidden")) {
            if (vl.isHidden === false) {
                if (vl.selectedValue === "") {
                    vl.hasError = true
                    result.push(vl.selectedValue)
                } else {
                    vl.hasError = false
                }
            }
        }
        console.log(result)
    }
    for (var i = 0; i < result.length; i++) {
        if (result[i] === "" || result[i] === false) {
            this.nextTab = false
            break;
        }
        else {
            this.nextTab = true
        }
    }
    if (this.nextTab === true) {
        this.tabOrder = this.tabOrder + 1;
        val.controls.forEach((item) => item.hasError = false);
    }
    console.log(this.formData.tabList)
}

procedeToPreviousTab() {
    this.tabOrder = this.tabOrder - 1;
}
getChildList(tab) {
    console.log(this.formData)
    let selectedValue: any[] = [];
    let result = true;
    for (var element of tab.controlList) {
        if (element.hasOwnProperty("parentcontrolIds") && element.selectedValue === "" && element.parentcontrolIds.length > 0 ) {
            console.log("sp", element.serviceParameters)
            element.parentcontrolIds.forEach(parId => {
                tab.controlList.forEach(el => {
                    if (parId === el.controlID) {
                        if (el.selectedValue !== "") {
                            let b = el.selectedValue
                            selectedValue.push(b)
                        }
                    }
                });
                console.log("para1", element.serviceParameters)
            });
            
            for (var i = 0; i < element.serviceParameters.length; i++) {
                element.serviceParameters[i].text = element.serviceParameters[i].value;
            }
            console.log("para", element.serviceParameters)
            for (const [index, [key, value]] of Object.entries(Object.entries(element.serviceParameters))) {
                element.serviceParameters[key] = selectedValue[index]
            }

            Object.keys(element.serviceParameters).forEach(function (key) {
                if (element.serviceParameters[key] == "") {
                    result = false
                }
            });
            if (result === true) {
                return element.options = this.getApplicationSubType(element)
            }
        }
    }
}

getApplicationSubType(obj) {
    console.log(obj)
    var requestdata_test = {
        token: 'amandaportal',
        lid: '',
        rsn: 0,
        loginName: 'Hanif',
        url: 'http://demo.randomaccess.ca/amanda/api_fw/Services/ServiceMain.svc/json/'
     };
 
     // let requestdata: any = window["requestdata"];
    let requestdata: any = requestdata_test;
     this.httpService.getBaseUrl(requestdata.url);
 
     //this.progress = true
     let body = {
         "token": requestdata.token,
         "lid": requestdata.lid,
         "folderType": obj.serviceParameters.folderType
     }
     this.httpService.post("getFolderSub", body)
         .subscribe(
             (response) => {
                 console.log(response)
                 obj.options = response.body
             },
             (error) => console.log(error)
     );


}

controlIsHidden(tab) {
    tab.controls.forEach(element => {
        if (element.hasOwnProperty("isHidden")) {

            for (var el of tab.controls) {
                if (element.parentcontrolID === el.controlID) {
                    if (element.expectedParentsValue === el.selectedValue) {
                        element.isHidden = true
                    } else {
                        element.isHidden = false
                    }
                }
            }

        }
    });

}

valueFromOtherControl(control) {

    if (control.hasOwnProperty("valueFromOtherControl")) {
        for (var vl of this.formData.tabList) {
            for (var el of vl.controls) {
                if (control.otherControlID === el.controlID) {
                    if (el.selectedValue == "") {
                        return control.selectedValue = window["requestdata"]["loginName"]

                    } else {
                        return control.selectedValue = el.selectedValue
                    }
                }
            }
        }
    }
}


getForm() {

    var requestdata_test = {
       token: 'amandaportal',
       lid: '',
       rsn: 0,
       loginName: 'Hanif',
       url: 'http://demo.randomaccess.ca/amanda/api_fw/Services/ServiceMain.svc/json/'
    };

    // let requestdata: any = window["requestdata"];
   let requestdata: any = requestdata_test;
    this.httpService.getBaseUrl(requestdata.url);

    //this.progress = true
    let body = {
        "token": requestdata.token,
        "lid": requestdata.lid,
        "formKey": "001-001-001-001"
    }
    this.httpService.post(this.url.Get_Form_By_Key, body)
        .subscribe(
            (response) => {
                this.formData = response.body
                this.getFormData()
            },
            (error) => console.log(error)
    ); 

}

getFormData(){   
    for (var vl of this.formData.tabList) {
        for (var el of vl.controlList) {
            if (el.hasOwnProperty("serviceParameters") && el.hasOwnProperty("parentcontrolIds") && el.parentcontrolIds.length ===0  ) {
                console.log("el", el)
                var requestdata_test = {
                    token: 'amandaportal',
                    lid: '',
                    rsn: 0,
                    loginName: 'Hanif',
                    url: 'http://demo.randomaccess.ca/amanda/api_fw/Services/ServiceMain.svc/json/'
                 };
                 
                let requestdata: any = requestdata_test;
                this.httpService.getBaseUrl(requestdata.url);

                var body = {
                    "token": requestdata.token,
                    "lid": requestdata.lid,
                };
                for (var i = 0; i < el.serviceParameters.length; i++) {
                    body[el.serviceParameters[i].text] = el.serviceParameters[i].value;
                }
             
                 // let requestdata: any = window["requestdata"];
             
                 //this.progress = true
                 this.httpService.post(el.serviceMethodName, body)
                     .subscribe(
                         (response) => {
                             el.options = response.body
                            //  if(response.status === 200){
                            //     this.formData = this.formData1
                            //     console.log(el)

                            //  }
                         },
                         (error) => console.log(error)
                 );
                 return
            }
            
        }
    }
}

saveApplyForLicensee(){
    let formData = []
    console.log( this.formData)
    for (var i = 0; i <  this.formData.tabList.length; i++) {        
        for (var j = 0; j < this.formData.tabList[i].controlList.length; j++) {
            formData.push({
                controlOID: this.formData.tabList[i].controlList[j].OID,
                selectedValue: this.formData.tabList[i].controlList[j].selectedValue
            });
        }
    }
    console.log(formData)

}


}
