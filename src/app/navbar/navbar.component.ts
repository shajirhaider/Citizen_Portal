import { Component, OnInit } from '@angular/core';
import { parseCookieValue } from '@angular/common/src/cookie';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navs: Object = [
    {text: "Apply, Register and Play"},
    {text:"Parks, Recreation and Culture" },
    {text:"Build, Invest and Grow"},
    {text:"Learn About"},
    {text: "Your City"},
    {text:"How Do I?"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
