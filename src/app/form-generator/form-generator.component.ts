import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from './../services/http.service';
import { UrlService } from './../services/url.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {
  controlList = [];
  formData = {
     tabList:[]

  }
  parentControlOpt = ""
  copyControlList = [];
  preview = false;
  tabOrder = 1;
  nextTab = false;
  showModal = false;
  tabs = [];
  item: Object = {}
  constructor(
      private httpService: HttpService,
      private url: UrlService) { }

  ngOnInit() {
      this.resetList();
      this.getForm();
  }
  private resetList() {
    this.controlList = [
        {
            controlName: "Label",
            controlType: "label",
            controlID: "",
            label: "",
            formTabOID: "",
            controlOrder:""
        },
        {
            controlName: "Checkbox",
            controlType: "checkbox",
            controlID: "",
            label: "",
            selectedValue: "",
            isRequired: "",
            formTabOID: "",
            controlOrder:""
        },
        {
            controlName: "Radio button with on-change",
            controlType: "radiobuttonOnChange",
            controlID: "",
            label: "",
            selectedValue: "",
            isRequired: "",
            hasError: false,
            errorText: "",
            toolTipText: "",
            options: [],
            formTabOID: "",
            controlOrder:"",
            "onChange": false,
        },
        {
            controlName: "Select",
            "controlType": "select",
            "label": "",
            "controlID": "",
            "selectedValue": "",
            "onChange": false,
            "hasChild": false,
            "isRequired": false,
            "hasError": false,
            "errorText": "",
            "toolTipText": "",
            "placeholderText": "",
            "parentcontrolIds": [],
            "options": [],
            "serviceMethodName": "",
            "serviceParameters": [],
            "oninitServiceCall": false,
            formTabOID: "",
            controlOrder:""
        },
        {
            "controlName": "Auto Complete",
            "controlType": "autoComplete",
            "controlID": "",
            "parentcontrolIds": [],
            "expectedParentsValue": "",
            "isHidden": false,
            "label": "",
            "selectedValue": "",
            "hasError": false,
            "errorText": "",
            "toolTipText": "",
            "placeholderText": "",
            "serviceMethodName": "",
            "serviceParameters": [],
            "options": [],
            formTabOID: "",
            controlOrder:""
        },
        {
            controlName: "Text Info",
            "controlType": "text-info",
            "controlID": "",
            "label": "",
            "otherControlID": "",
            "valueFromOtherControl": "",
            "selectedValue": "",
            formTabOID: "",
            controlOrder:""
        },
        {
            controlName: "Input",
            "controlType": "input",
            "controlID": "",
            "isHidden": false,
            "label": "",
            "selectedValue": "",
            "hasError": false,
            "errorText": "",
            "toolTipText": "",
            "placeholderText": "",
            "isRequired": "",
            formTabOID: "",
            controlOrder:""
        },
        {
            controlName: "Radio Button",
            "controlType": "radiobutton",
            "controlID": "",
            "label": "",
            "selectedValue": "",
            "isRequired": false,
            "hasError": false,
            "isHidden": false,
            "errorText": "",
            "toolTipText": "",
            "options": [],
            "onChange": false,
            formTabOID: "",
            controlOrder:""
        },
        {
            controlName: "Date Picker",
            "controlType": "datePicker",
            "controlID": "",
            "label": "",
            "selectedValue": "",
            "isRequired": false,
            "isHidden": false,
            "hasError": false,
            "errorText": "",
            "toolTipText": "",
            "placeholderText": "",
            formTabOID: "" ,
            controlOrder:""
        },
    ];

    setTimeout(() => {
        this.copyControlList = this.controlList.slice();
    }, 0);
}


drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);

      this.resetList()
  }
}

addTab() {
  console.log(this.formData.tabList)
  this.tabs.push('Step' + (this.tabs.length + 1));

  this.formData.tabList.push(
      {
          "controlType": "tab",
          "tabName": "",
          "tabID": "",
          "submit": false,
          "tabOrder": "",
          "nextButtonLabel": "",
          "previousButtonLabel": "",
          "controlList": []
      }
  )
}
getItem(item) {
  this.item = item
  console.log(item)
}
deleteTab(index) {
  this.formData.tabList.splice(index, 1)
}

addOption(option) {
  option.push(
      {
          "text": "",
          "value": ""
      }
  )
}
deleteOption(item, index) {
  item.splice(index, 1)
}

addParent(option) {
  option.push(this.parentControlOpt)
  this.parentControlOpt = ""
}
deleteParent(item, index) {
  item.splice(index, 1)
}


procedeToNextTab(val) {
  let result = []
  for (var vl of val.controlList) {
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
      val.controlList.forEach((item) => item.hasError = false);
  }
  console.log(this.formData.tabList)
}

procedeToPreviousTab() {
  this.tabOrder = this.tabOrder - 1;
}
getChildList(tab) {
  let selectedValue: any[] = [];
  let result = true;
  for (var element of tab.controlList) {
      if (element.hasOwnProperty("parentcontrolIDs") && element.selectedValue === "") {
          element.parentcontrolIDs.forEach(parId => {
              tab.controlList.forEach(el => {
                  if (parId === el.controlID) {
                      if (el.selectedValue !== "") {
                          let b = el.selectedValue
                          selectedValue.push(b)
                      }
                  }
              });
          });
          for (const [index, [key, value]] of Object.entries(Object.entries(element.serviceParameters))) {
              element.serviceParameters[key] = selectedValue[index]
          }

          Object.keys(element.serviceParameters).forEach(function (key) {
              if (element.serviceParameters[key] == "") {
                  result = false
              }
          });
        //   if (result === true) {
        //       return element.options = this.getApplicationSubType(element)
        //   }
      }
  }
}

controlIsHidden(tab) {
  tab.controlList.forEach(element => {
      if (element.isHidden === true) {

          for (var el of tab.controlList) {
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
          for (var el of vl.controlList) {
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
              console.log(response)
              this.formData = response.body
          },
          (error) => console.log(error)
  );

}
    saveForm() {
    //   this.formData.tabList.forEach((tab)=>{
    //     tab.controlList.forEach((control)=>{
    //       if (control.hasOwnProperty("serviceParameters")) {
    //         var result = {};
    //         for (var i = 0; i < control.serviceParameters.length; i++) {
    //           result[control.serviceParameters[i].key] = control.serviceParameters[i].value;
    //         }
    //         control.serviceParametersString = JSON.stringify(result)
    //         console.log(control)
    //       }

    //     })

    //   })  
    var requestdata_test = {
        token: 'amandaportal',
        lid: '',
        rsn: 0,
        loginName: 'Hanif',
        url: 'http://demo.randomaccess.ca/amanda/api_fw/Services/ServiceMain.svc/json/'
    };
    console.log(this.formData)
    //   let requestdata: any = window["requestdata"];
    let requestdata: any = requestdata_test;
    this.httpService.getBaseUrl(requestdata.url);

    //this.progress = true
    let body = {
        "token": requestdata.token,
        "lid": requestdata.lid,
        "data": this.formData

    }
    this.httpService.post("updateForm", body)
    .subscribe(
        (response) => {
            console.log(response)
        },
        (error) => console.log(error)
    );
    }
    getControl(control, tab, index) {
        control.formTabOID = tab.OID
        control.controlOrder = +(index+1)
        console.log(control)
        this.item = control

    }
}
