import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agree',
  templateUrl: './agree.component.html',
  styleUrls: ['./agree.component.css']
})
export class AgreeComponent implements OnInit {
 btnShow: Boolean = false;
 agree:Boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
