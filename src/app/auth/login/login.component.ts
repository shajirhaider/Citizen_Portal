import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from './../../services/http.service';
import { UrlService } from './../../services/url.service';
import { LocalStorageService } from './../../services/local-storage.service'
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorShow : boolean = false
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    token: new FormControl('amandaportal')
});

constructor(
            private httpService: HttpService, 
            private url: UrlService, 
            private storage : LocalStorageService, 
            private authService: AuthService,
            private router: Router
          ) {}
  ngOnInit() {}

  authenticatePublicUser(){
    console.log(this.loginForm.value)
    this.httpService.post(this.url.LOGIN, this.loginForm.value)
      .subscribe(
        (response) =>{   
          if(response.status == 200){
            if(response.body.lid){
              localStorage.clear()
              this.storage.setItem('lid', response.body.lid)
              this.storage.setItem('peopleRSN', response.body.peopleRSN)
              this.authService.display(true);
              this.router.navigate(['/']);
            }
            else{
              this.errorShow = true
            }
            console.log(response)
            
          }
        },
        (error) => console.log(error)
      );

  }

  register(){
    this.router.navigate(['register']);
  }

}
