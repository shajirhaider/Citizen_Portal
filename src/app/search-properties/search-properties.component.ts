import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-properties',
  templateUrl: './search-properties.component.html',
  styleUrls: ['./search-properties.component.css']
})
export class SearchPropertiesComponent implements OnInit {
 searchProperties: Object = {
   types:"",
   direction:""
 };
 streetType: Object = [
   {id:"road", text:"Road"},
   {id:"loop", text:"Loop"},
   {id:"highway", text:"High Way"},
   {id:"lane", text:"Lane"},
   {id:"hill", text:"Hill"},
 ];
 streetDirection: Object = [
  {id:"e", text:"E"},
  {id:"w", text:"W"},
  {id:"n", text:"N"},
  {id:"s", text:"S"},
  {id:"ne", text:"NE"},
  {id:"sw", text:"SW"},
  {id:"se", text:"SE"},
  {id:"nw", text:"NW"},
];
  constructor() { }

  ngOnInit() {
  }

  clear(){
    this.searchProperties = "";
    this.streetType = [{id:"", text:""}];
  }

}
