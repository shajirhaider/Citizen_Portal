import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-for-permit',
  templateUrl: './apply-for-permit.component.html',
  styleUrls: ['./apply-for-permit.component.css']
})
export class ApplyForPermitComponent implements OnInit {
  formJson =[
    {tab:"Tab-1", 
    controls:[
      { controlType:'radio', 
        label:"test2", 
        option:[
          {text:"Man", value:"M"},
          {text:"Female", value:"F"}
        ]
      },
     { controlType:'input', label:"test1"},
     { controlType:'checkbox', label:"test3",
        option:[
          {text:"CheckBox 1", value:"1"},
          {text:"CheckBox 2", value:"2"}
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

}
