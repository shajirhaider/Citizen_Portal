import { Component, OnInit, ChangeDetectorRef, DoCheck } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Citizen Portal';
  username : string;
  showLoader: boolean;
  constructor(private loaderService: LoaderService, 
              private storageService: LocalStorageService, 
              private authService: AuthService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
        this.showLoader = val;
    });

  
    this.authService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });

    this.authService.dataString$.subscribe( data => {
      this.username = data;
    });

  // getUserName(){
  //   if(this.storageService.getItem('username')){
  //     this.username = this.storageService.getItem('username')
  //   }
  //   else{
  //     this.username = ""
  //   }
  // }


  }
  public ngDoCheck(): void {
    this.cdr.detectChanges();
  }
}

