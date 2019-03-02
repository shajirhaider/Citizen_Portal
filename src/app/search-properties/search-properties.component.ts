import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service'

@Component({
  selector: 'app-search-properties',
  templateUrl: './search-properties.component.html',
  styleUrls: ['./search-properties.component.css']
})
export class SearchPropertiesComponent implements OnInit {
  searchProperties: Object = {
    "token":"amandaportal", 
    "lid":"", 
    "count":0
  };
  streetType: Object = [];
  streetDirection: Object = [];
  searchResultshow: boolean = false;
  searchResult: Object = [];
constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getValidStreetType()
    this.getValidStreetDirections()
  }
  getValidStreetType(){
    let url = 'getValidStreetTypes'
    let body = {
      "token":"amandaportal", 
      "lid":""
    }
    this.httpService.post(url,body)
      .subscribe(
        (response) =>{
          this.streetType = response["body"]
        },
        (error) => console.log(error)
      );
  }  
  getValidStreetDirections(){
    let url = 'getValidStreetDirections'
    let body = {
      "token":"amandaportal", 
      "lid":""
    }
    this.httpService.post(url,body)
      .subscribe(
        (response) =>{
          console.log(response["body"])
          this.streetDirection = response["body"]
        },
        (error) => console.log(error)
      );
  }
  searchProperty(){
    let url = 'searchProperty'
    let body = this.searchProperties
    this.httpService.post(url,body)
      .subscribe(
        (response) =>{
          console.log(response)
          if(response.status == 200){
            this.searchResultshow = true
            this.searchResult = response["body"][0]
          }
         
        },
        (error) => console.log(error)
      );
  }
  clear(){
    this.searchProperties = {};
  }
  searchShow(){
    this.searchResultshow = false
    this.searchProperties = {}
  }

}
