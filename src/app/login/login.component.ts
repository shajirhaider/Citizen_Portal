import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { UrlService } from '../services/url.service';
import { LocalStorageService } from '../services/local-storage.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    token: new FormControl('amandaportal')
});

constructor(private httpService: HttpService, private url: UrlService, private storage : LocalStorageService) {}
  ngOnInit() {
  }

  authenticatePublicUser(){
    this.httpService.post(this.url.LOGIN, this.loginForm.value)
      .subscribe(
        (response) =>{
          this.storage.setItem('lid', response.body.lid)
          console.log(response)
        },
        (error) => console.log(error)
      );

  }

}
