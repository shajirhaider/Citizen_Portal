import { Component, OnInit } from '@angular/core';
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
  controlList = [
    {controlName:"Label",controlType:"label", controlID:"", html:"", label:"" },
    {controlName:"Checkbox",controlType:"checkbox", controlID:"", label:"", selectedValue:"", isRequired:"" }, 
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

  formArea = [ ];
  copyControlList = [];
  constructor() { }

  ngOnInit() {
    this.resetList();
  }
  private resetList() {
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
}
