import { Component, OnInit } from '@angular/core';
import { parseCookieValue } from '@angular/common/src/cookie';
import { NavMenuService } from '../services/nav-menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // navs: Object = [
  //   {text: "Apply, Register and Play"},
  //   {text:"Parks, Recreation and Culture" },
  //   {text:"Build, Invest and Grow"},
  //   {text:"Learn About"},
  //   {text: "Your City"},
  //   {text:"How Do I?"}
  // ]
  navs : {text: string}[] = [];
  constructor( private navmenuService : NavMenuService ) { }

  ngOnInit() {
    this.navs = this.navmenuService.nav
  }

}
