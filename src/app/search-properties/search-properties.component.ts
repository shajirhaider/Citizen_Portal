import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service'
import { SearchResultComponent } from '../search-result/search-result.component';

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
  streets: Object = [];
  searchResultshow: boolean = false;
  msgShow: boolean = false;
  searchResults: Object[] = [];
  addSpacer = " ";
  addComma= ","
  searchResultCount:number = 0;
constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getValidStreetType()
    this.getValidStreetDirections()
    this.getValidStreet()
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
  getValidStreet(){
    let url = 'getValidStreet'
    let body = {
      "token":"amandaportal", 
      "lid":""
    }
    this.httpService.post(url,body)
      .subscribe(
        (response) =>{
          console.log(response["body"])
          this.streets = response["body"]
        },
        (error) => console.log(error)
      );
  }
  searchProperty(){
    if( !this.searchProperties["streetNumber"] && !this.searchProperties["streetName"] && !this.searchProperties["streetType"] &&
      !this.searchProperties["streetDirection"] && !this.searchProperties["unitNumber"] && !this.searchProperties["rollNumber"]){
      this.msgShow = true;
      this.searchResultshow = false;
      console.log("msg",this.searchProperties["streetNumber"])
    }else{
      let url = 'searchProperty'
      let body = this.searchProperties
      this.httpService.post(url,body)
        .subscribe(
          (response) =>{
            console.log("res",response)
            if(response.status == 200){
              this.searchResultshow = true
              this.msgShow = false
              this.searchResults = response["body"]
              this.searchResultCount = this.searchResults.length
              console.log(this.searchResults)
            }
           
          },
          (error) => console.log(error)
        );

    }
  }
  clear(){
    this.searchProperties = {};
  }
  searchShow(){
    this.searchResultshow = false,
    this.msgShow = false
   // this.searchProperties = {}
  }

}
