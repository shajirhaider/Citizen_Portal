import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../src/app/services/http.service';
import { UrlService } from '../../../../src/app/services/url.service';

@Component({
  selector: 'app-apply-for-permit',
  templateUrl: './apply-for-permit.component.html',
  styleUrls: ['./apply-for-permit.component.css']
})
export class ApplyForPermitComponent implements OnInit {
  tabOrder:number =3;
  formData:any = {}
  replaceString = "test";
  nextTab = false;
  controlOrder : any = 'controlOrder'

  constructor(
    private httpService: HttpService,
    private url: UrlService, ) { }

  ngOnInit() {
    this.getForm()
  }


procedeToNextTab(val) {
    let result = []
    for (var vl of val.controlList) {
        console.log("vl",vl)
        if (vl.hasOwnProperty("isRequired")) {
            console.log(vl.isRequired)
            if(vl.isRequired === true && vl.isHidden === false){
                result.push(vl.selectedValue)
                if (vl.selectedValue === "") {
                    vl.hasError = true
                } else {
                    vl.hasError = false
                }
            }else{
                continue
            }
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
// let requestdata: any = window["requestdata"]; 
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
    let serviceMethodName = ""
    console.log(tab)
    let selectedValue: any[] = [];
    let result = true;
    for (var element of tab.controlList) {
        if (element.hasOwnProperty("parentcontrolIds")  && element.parentcontrolIds.length > 0 ) {
            element.parentcontrolIds.forEach(parId => {
                tab.controlList.forEach(el => {
                    if (parId === el.controlID) {
                        if (el.selectedValue !== "") {
                            let b = el.selectedValue
                            selectedValue.push(b)
                        }
                    }
                });
            });
            
            for (var i = 0; i < element.serviceParameters.length; i++) {
                element.serviceParameters[i].value = selectedValue[i];
            }
            
            for (var i = 0; i < element.serviceParameters.length; i++) {
                body[element.serviceParameters[i].text] = element.serviceParameters[i].value;
            }
            serviceMethodName = element.serviceMethodName

            Object.keys(element.serviceParameters).forEach(function (key) {
                if (element.serviceParameters[key] == "") {
                    result = false
                }
            });
            if (result === true) {
                this.getServiceCall(serviceMethodName, body,element)
            }
        }
    }
}

controlIsHidden(tab) {
    tab.controlList.forEach(element => {
        for (var el of tab.controlList) {
            if (element.parentcontrolIds[0] === el.controlID) {
                if (element.expectedParentsValue === el.selectedValue) {
                    element.isHidden = true
                } else {
                    element.isHidden = false
                }
            }
        }

    });

}

valueFromOtherControl(control) {

    // if (control.valueFromOtherControl === true) {
        for (var vl of this.formData.tabList) {
            for (var el of vl.controlList) {
                if (control.otherControlID === el.controlID) {
                    if (el.selectedValue == "") {
                        return control.selectedValue = "window"

                    } 
                    else {
                        return control.selectedText = el.selectedText
                    }
                }
                else if (control.otherControlID === "username") {
                    return control.selectedValue = "window  1"
                }
            }
        }
    // }
}

getText(control){
    if(control.controlType === "select"){
        control.options.forEach(element => {
            if(element.value === control.selectedValue){
                return control.selectedText = element.text
            }
        });
    }else{
        return control.selectedText = control.selectedValue
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
        "formKey": "001-001-001-002"
    }
    this.httpService.post(this.url.Get_Form_By_Key, body)
        .subscribe(
            (response) => {
                this.formData = response.body
                console.log(this.formData)
                this.getFormData()
            },
            (error) => console.log(error)
    ); 

}

getFormData(){  
                
    // let requestdata: any = window["requestdata"]; 
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
    let serviceMethodName = ""
    for (var vl of this.formData.tabList) {
        for (var el of vl.controlList) {
            if (el.hasOwnProperty("oninitServiceCall") === true && el.oninitServiceCall === true) {
                serviceMethodName = el.serviceMethodName
                for (var i = 0; i < el.serviceParameters.length; i++) {
                    body[el.serviceParameters[i].text] = el.serviceParameters[i].value;
                }
                this.getServiceCall(serviceMethodName, body, el)
            }   
        }
    }
}

getServiceCall(serviceMethodName,body, el){
    this.httpService.post(serviceMethodName, body)
        .subscribe(
            (response) => {
                console.log("data", response)
             if(response.status === 200){
                el.options = response.body
             }
            },
            (error) => console.log(error)
    );

}

saveApplyForLicensee(){
    let formData = []
    console.log( this.formData)
    for (var i = 0; i <  this.formData.tabList.length; i++) {        
        for (var j = 0; j < this.formData.tabList[i].controlList.length; j++) {
            formData.push({
                controlOID: this.formData.tabList[i].controlList[j].OID,
                selectedValue: this.formData.tabList[i].controlList[j].selectedValue

              //  selectedText
            });
        }
    }
    console.log(formData)

}


}
