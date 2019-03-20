import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service'
import { LoaderService } from '../services/loader.service';

import { FormGroup, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface StreetType {
  description: string;
  id:string
}

export interface StreetName {
  propStreet: string;
}

export interface StreetDirection {
  addressDirection: string;
}

@Component({
  selector: 'app-search-properties',
  templateUrl: './search-properties.component.html',
  styleUrls: ['./search-properties.component.css']
})
export class SearchPropertiesComponent implements OnInit {
  
  searchProperties = new FormGroup({
    streetNumber: new FormControl(''),
    streetName: new FormControl(''),
    streetType: new FormControl(''),
    streetDirection: new FormControl(''),
    unitNumber: new FormControl(''),
    rollNumber: new FormControl(''),
    token: new FormControl('amandaportal'), 
    lid:new FormControl(''), 
    count:new FormControl('0')
  });
  streetTypes : StreetType[];
  filteredStreetTypes: Observable<StreetType[]>;
  streetNames : StreetName[];
  filteredStreetNames: Observable<StreetName[]>;
  streetDirections : StreetDirection[];
  filteredstreetDirection: Observable<StreetDirection[]>;
  searchResultshow: boolean = false;
  msgShow: boolean = false;
  searchResults: Object[] = [];
  addSpacer = " ";
  addComma= ","
  searchResultCount:number = 0;
  msg: String ="msg";
  searchResultMsg: String = '';
    constructor(private httpService: HttpService, private loaderService: LoaderService) {}

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
         this.streetTypes = response["body"]

        this.filteredStreetTypes = this.searchProperties.get('streetType').valueChanges
          .pipe(
            startWith<string | StreetType>(''),
            map(value => typeof value === 'string' ? value : value.id),
            map(name => name ? this._filterStreetType(name) : this.streetTypes.slice())
          );
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
          this.streetDirections = response["body"]
        this.filteredstreetDirection= this.searchProperties.get('streetDirection').valueChanges
        .pipe(
          startWith<string | StreetDirection>(''),
          map(value => typeof value === 'string' ? value : value.addressDirection),
          map(name => name ? this._filterStreetDirection(name) : this.streetDirections.slice())         
        );
        },
        (error) => console.log(error)
      );
  } 
  getValidStreet(){
    this.loaderService.display(true);
    let url = 'getValidStreet'
    let body = {
      "token":"amandaportal", 
      "lid":""
    }
    this.httpService.post(url,body)
      .subscribe(
        (response) =>{
          this.streetNames = response["body"]
          this.filteredStreetNames = this.searchProperties.get('streetName').valueChanges
          .pipe(
            startWith<string | StreetName>(''),
            map(value => typeof value === 'string' ? value : value.propStreet),
            map(name => name ? this._filterStreetName(name) : this.streetNames.slice())
          );
          console.log(this.streetNames)
        this.loaderService.display(false);
        },
        (error) => console.log(error)
    );
  }
  searchProperty(){
    if( !this.searchProperties.value.streetName && !this.searchProperties.value.rollNumber){
      this.msgShow = true;
      this.searchResultshow = false;
      this.msg = "Street Name or Roll Number is mandatory."

    }else if(this.searchProperties.value.streetName && this.searchProperties.value.rollNumber){
      this.msgShow = true;
      this.searchResultshow = false;
      this.msg = "Please enter either Street Name or Roll Number"
    }else{
      this.loaderService.display(true);
      let url = 'searchProperty'
      let body = this.modifier(this.searchProperties)
      this.httpService.post(url,body)
        .subscribe(
          (response) =>{
            console.log("res",response)
            if(response.status == 200){
              this.searchResultshow = true
              this.msgShow = false
              this.searchResults = response["body"]
              this.searchResultCount = this.searchResults.length
              if(this.searchProperties.value.streetName && this. searchProperties.value.streetNumber){
                this.searchResultMsg = "Found "+ this.searchResultCount+" result(s) for "+ this.searchProperties.value.streetNumber + " " + this.searchProperties.value.streetName
              }else if (this.searchProperties.value.streetName && !this. searchProperties.value.streetNumber){
                this.searchResultMsg = "Found "+ this.searchResultCount+" result(s) for "+ this.searchProperties.value.streetName
              }
              else{
                this.searchResultMsg = "Found "+ this.searchResultCount+" result(s) for "+ this.searchProperties.value.rollNumber
              }
              this.loaderService.display(false);
              console.log(this.searchResults)
            }           
          },
          (error) => console.log(error)
        );
   }
  }
  modifier(body){
    let obj = body.value;
    if(this.searchProperties.value.streetType){
      obj.streetType = obj.streetType.id;
    }

    if(this.searchProperties.value.streetDirection){
      obj.streetDirection = obj.streetDirection.addressDirection;
    }

    if(this.searchProperties.value.streetName){
      obj.streetName = obj.streetName.propStreet;
    }
    console.log(obj)
    return obj;

  }
  clear(){
 //   this.searchProperties = {};
  }
  searchShow(){
    this.searchResultshow = false,
    this.msgShow = false
  }
  
  displayfilterStreetType(type?: StreetType): string | undefined {
    return type ? type.description : undefined;
  }
  private _filterStreetType(name: string): StreetType[] {
    const filterValue = name.toLowerCase();
    return this.streetTypes.filter(option => option.description.toLowerCase().indexOf(filterValue) === 0);
  }
  displayfilterDirection(direction?: StreetDirection): string | undefined {
    return direction ? direction.addressDirection : undefined;
  }
  private _filterStreetDirection(name: string): StreetDirection[] {
    const filterValue = name.toLowerCase();
    return this.streetDirections.filter(option => option.addressDirection.toLowerCase().indexOf(filterValue) === 0);
  }
  displayfilterStreetName(name?: StreetName): string | undefined {
    return name ? name.propStreet : undefined;
  }
  private _filterStreetName(name: string): StreetName[] {
    const filterValue = name.toLowerCase();
    return this.streetNames.filter(option => option.propStreet.toLowerCase().indexOf(filterValue) === 0);
  }

}
