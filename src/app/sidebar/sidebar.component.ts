import { Component, OnInit, ChangeDetectorRef, DoCheck } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showLoader: boolean;
  items = [
    {
      text:"Home", 
      url:"/home" 
    },
    {
      text:"Search", 
      url:"/search-properties"
    },
    {
      text:"Search Mobile Sign Locations", 
      url:"/search-mobile-sign-location"
    },
    {
      text:"Public Payment Page", 
      url:""
    },
    {
      text:"My Profile", 
      hasChild:false,
      child:[ 
        {
          text:"Update Personal Information",
          url:"/update-personal-info"
        },  
        {
          text:"Update Password",
          url:"/update-password"
        }
      ]
    },
    {
      text:"My Permits", 
      hasChild:false,
      child:[ 
        {
          text:"Apply for a Permit",
          url:"/apply-for-permit"
        },  
        {
          text:"Track My Application",
          url:"/track-application"
        },
        {
          text:"My Shopping Cart",
          url:"/shopping-cart"
        }
      ]
    },
    {
      text:"My Licences", 
      hasChild:false,
      child:[ 
        {
          text:"Apply for Licence",
          url:"/apply-for-licence"
        },  
        {
          text:"Track My Application",
          url:"/track-application"
        },
        {
          text:"My Shopping Cart",
          url:"/shopping-cart"
        }
      ]
    },
    {
      text:"Logout", 
      url:"/logout" 
    },
  ]
  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) {}


  ngOnInit() {
    this.authService.status.subscribe((val: boolean) => {
        this.showLoader = val;
    });
  }

  public ngDoCheck(): void {
      this.cdr.detectChanges();
  }
}
