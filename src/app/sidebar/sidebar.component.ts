import { Component, OnInit } from '@angular/core';
import { homedir } from 'os';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  toggle= false
  items = [
    {text:"Home", url:"" },
    {text:"Search", url:"/search-properties"},
    {text:"Search Mobile Sign Locations", url:"/search-mobile-sign-location"},
    {text:"Login/Register", url:"/login"},
    {text:"My Profile", url:"/login", hasChild:false,
      child:[ {text:"Login/Register", url:"/login"}]}
  ]
  constructor() { }

  ngOnInit() {
  }
}
