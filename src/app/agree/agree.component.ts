import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.component.html',
  styleUrls: ['./agree.component.css']
})
export class AgreeComponent implements OnInit {
 btnShow: Boolean = false;
 agree:Boolean;
 
 constructor( private router: Router) {}

  ngOnInit() {
  }ymbol: string;
  
  localStorageDataRemove(){
    localStorage.removeItem("citizen_searchRslt")
    localStorage.removeItem("citizen_searchProp")
    localStorage.removeItem("citizen_search_rslt_msg")
    this.router.navigate(['search-properties']);

  }
}