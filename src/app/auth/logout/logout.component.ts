import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from './../../services/local-storage.service'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(    
    private authService: AuthService,  
    private router: Router, 
    private storage : LocalStorageService ) { }

  ngOnInit() {
  }

  logout(){
    this.authService.display(false);
    this.authService.getUsername('')
    this.router.navigate(['/home']);
    this.storage.clear()

  }

  cancel(){
    this.router.navigate(['/home']);
  }

}
