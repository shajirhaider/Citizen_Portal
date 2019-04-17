import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from './../../services/http.service';
import { UrlService } from './../../services/url.service';
import { LocalStorageService } from './../../services/local-storage.service'
import { LoaderService } from './../../services/loader.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {  
  UpdatePassword = new FormGroup({
    internetPassword: new FormControl(''),
  });

  constructor(
    private httpService: HttpService, 
    private url: UrlService, 
    private storage : LocalStorageService, 
    private loaderService : LoaderService, 
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
  }
  updatePeopleInternetPassword(){
    this.loaderService.display(true);
      let body = this.modifier(this.UpdatePassword)
      this.httpService.post(this.url.Update_People_Internet_Password, body)
        .subscribe(
          (response) =>{
            console.log(response)
            this.loaderService.display(false);
          },
          (error) => console.log(error)
        );
   
  }

  modifier(body){
    let a = JSON.stringify(body.value)
    let obj = body.value;
    obj.peopleRSN = +this.storage.getItem("peopleRSN")
    obj.lid = this.storage.getItem("lid")
    obj.token = 'amandaportal';
    console.log(obj)
    return obj;

  }


}
