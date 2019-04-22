import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  askPin = true;
  isPIN:boolean;
  pinYes : boolean = false;
  regForm = new FormGroup({
    pin: new FormControl(''),
    email: new FormControl(''),
    token: new FormControl('amandaportal')
});
  constructor() { }

  ngOnInit() {
  }
  next(){
    if(this.isPIN == true){
      this.pinYes = true
      this.askPin = false
    }
  }
}
