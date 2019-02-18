import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  address= "";
  rollNo="150015080000000";
  description="PLAN 1364 LOT 51 CLOSED;HESPELER RD RP67R3704 PARTS; 1 TO 7";
  area= "3.74";
  frontage=""; 
  depth="";


  constructor() { }

  ngOnInit() {
  }

}
