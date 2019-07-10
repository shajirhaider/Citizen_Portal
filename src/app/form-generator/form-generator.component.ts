import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { ItemsList } from '@ng-select/ng-select/ng-select/items-list';
import { copyStyles } from '@angular/animations/browser/src/util';


@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {
  controlList = [
    { controlName:"Label",
      controlType:"label", 
      controlID:"",  
      label:"",
      html:""
    },
    { controlName:"Checkbox",
      controlType:"checkbox", 
      controlID:"", label:"", 
      selectedValue:"", 
      isRequired:""
    }, 
    { controlName:"Radio button with on-change",
      controltype:"radiobuttonOnChange", 
      controlID:"", 
      label:"",
      selectedValue:"", 
      isRequired:"" ,     
      hasError: false,
      errorText: "",
      toolTipText: "",
      options: []
    }
  ];

  formJson = []
  copyControlList = [];
  constructor() { }

  ngOnInit() {
    this.resetList();
  }
  private resetList() {
    this.controlList = [
      { controlName:"Label",
        controlType:"label", 
        controlID:"",  
        label:"",
        html:""
      },
      { controlName:"Checkbox",
        controlType:"checkbox", 
        controlID:"", label:"", 
        selectedValue:"", 
        isRequired:""
      }, 
      { controlName:"Radio button with on-change",
        controltype:"radiobuttonOnChange", 
        controlID:"", 
        label:"",
        selectedValue:"", 
        isRequired:"" ,     
        hasError: false,
        errorText: "",
        toolTipText: "",
        options: []
      }
    ];
  
    setTimeout(() => {
      this.copyControlList = this.controlList.slice();
    }, 0);    
  }

  // isAllowed = (drag?: CdkDrag, drop?: CdkDrop) => {
  //   return false;
  // };

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

  addTab(){
    console.log(this.formJson)
    this.formJson.push(
      {
        "tabName": "",
        "tabID": "",
        "tabOrder": "",
        "nextButtonLabel": "",
        "previousButtonLabel": "",
        "controls": []
      }
    )    
  }

  deleteTab(index){
    this.formJson.splice(index,1)
  }

  addOption(option){
    option.push(
      {
        "text": "",
        "value": ""
      }
    )    
  }
  deleteOption(item,index){
    item.splice(index,1)
  }
}
