import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from './../../services/http.service';
import { UrlService } from './../../services/url.service';
import { LocalStorageService } from './../../services/local-storage.service'
import { AuthService } from './../../services/auth.service';
import { LoaderService } from './../../services/loader.service';

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
            private router: Router,
            private loaderService: LoaderService, 
          ) {}
  ngOnInit() {}

  authenticatePublicUser(){
    this.loaderService.display(true);  
    this.httpService.post(this.url.LOGIN, this.loginForm.value)
      .subscribe(
        (response) =>{   
          if(response.status == 200){
            if(response.body.lid){
              this.storage.clear()
              this.storage.setItem('lid', response.body.lid)
              this.storage.setItem('peopleRSN', response.body.peopleRSN)
              this.getPeople()
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

  getPeople(){
    let lid = "";
    if(this.storage.getItem("lid")){
      lid = this.storage.getItem("lid")
    }
    else{
      lid = ""
    }
    let body = {
      "token":"amandaportal", 
      "lid":lid,
      "peopleRSN":+this.storage.getItem("peopleRSN")
    }
    this.httpService.post(this.url.Get_People, body)
      .subscribe(
        (response) =>{
          let name = response["body"]["nameFirst"]+" "+response["body"]["nameMiddle"]+" "+response["body"]["nameLast"];
          let username = response["body"]["organizationName"]+" ("+ name + " )"
          this.authService.getUsername(username)
          this.authService.display(true);
          this.router.navigate(['/home']);
          this.loaderService.display(false);  
        },
        (error) => console.log(error)
      );
  }
  register(){
    this.router.navigate(['login/register']);
  }

}
