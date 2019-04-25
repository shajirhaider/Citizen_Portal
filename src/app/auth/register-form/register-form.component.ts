import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  person: boolean;
  agreeContent = false;
  agree : boolean
  personForm = new FormGroup({
    pin: new FormControl(''),
    email: new FormControl(''),
    token: new FormControl('amandaportal')
  });

  orgForm = new FormGroup({
    pin: new FormControl(''),
    email: new FormControl(''),
    token: new FormControl('amandaportal')
  });

  constructor(   private router : Router ) { }

  ngOnInit() {
  }

  agreeContentShow(){
    this.agreeContent = true;
  }

  btnShowT(){
    this.agree = true
  }
  btnShowF(){
    this.agree = false
  }
  previous(){
    this.router.navigate(['/login/register'])
  }
}
