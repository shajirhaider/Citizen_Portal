
import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpService } from '../services/http.service';
import { UrlService } from '../services/url.service';
import { LoaderService } from '../services/loader.service';
import { LocalStorageService } from '../services/local-storage.service'
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

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
  selector: 'app-search-mobile-sign-location',
  templateUrl: './search-mobile-sign-location.component.html',
  styleUrls: ['./search-mobile-sign-location.component.css']
})
export class SearchMobileSignLocationComponent implements OnInit {
  
  searchProperties = new FormGroup({
    streetNumber: new FormControl(''),
    streetName: new FormControl(''),
    streetType: new FormControl(''),
    streetDirection: new FormControl(''),
    postalCode: new FormControl(''),
    token: new FormControl('amandaportal'), 
    lid:new FormControl(''), 
    count:new FormControl('0')
  });
  searchForm: Boolean = true;
  streetTypes : StreetType[];
  filteredStreetTypes: Observable<StreetType[]>;
  streetNames : StreetName[];
  filteredStreetNames: Observable<StreetName[]>;
  streetDirections : StreetDirection[];
  filteredstreetDirection: Observable<StreetDirection[]>;
  searchResultshow: boolean = false;
  msgShow: boolean = false;
  searchResults: any[] = [];
  searchResultCount:number = 0;
  msg: String ="msg";
  searchResultMsg: string = '';
  address: String = "";

  displayedColumns: string[] = ['streetAddress', 'location', 'availableAfter'];
  dataSource: MatTableDataSource<any[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpService: HttpService, private url: UrlService, private loaderService: LoaderService, private storage : LocalStorageService) {

    // if(this.storage.getItem("citizen_searchProp")){
    //   let a = JSON.parse(this.storage.getItem("citizen_searchProp"))
    //   this.searchProperties.setValue(a)
    // }

    // if(this.storage.getItem("citizen_searchRslt")){
    //   this.searchResultshow = true
    //   this.searchForm = false
    //   this.searchResults = JSON.parse(this.storage.getItem("citizen_searchRslt"))
    //   this.dataSource = new MatTableDataSource(this.searchResults)
    //   setTimeout(() => {
    //     this.dataSource.paginator = this.paginator
    //   }, 200);
    //   this.searchResultMsg = this.storage.getItem("citizen_search_rslt_msg")
    // }
  }

  ngOnInit() {
    this.getValidStreetType()
    this.getValidStreetDirections()
    this.getValidStreet()
  }
  getValidStreetType(){ 
    let body = {
      "token":"amandaportal", 
      "lid":""
    }
    this.httpService.post(this.url.Get_Valid_Street_Types, body)
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
    let body = {
      "token":"amandaportal", 
      "lid":""
    }
    this.httpService.post(this.url.Get_Valid_Street_Directions, body)
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
    let body = {
      "token":"amandaportal", 
      "lid":""
    }
    this.httpService.post(this.url.Get_Valid_Street, body)
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
    if( !this.searchProperties.value.streetName){
      this.msgShow = true;
      this.searchResultshow = false;
      this.msg = "Street Name is mandatory."

    }else if(this.searchProperties.value.streetName){
      this.msgShow = true;
      this.searchResultshow = false;
      this.msg = "Please enter either Street Name "
    }else{
      this.loaderService.display(true);
      let body = this.modifier(this.searchProperties)
      this.httpService.post(this.url.Search_Property, body)
        .subscribe(
          (response) =>{
            console.log("res",response)
            if(response.status == 200){
              this.searchResultshow = true
              this.searchForm = false;
              this.msgShow = false
              this.searchResults = response["body"]
              this.storage.setItem("citizen_searchRslt", JSON.stringify(this.searchResults))
              this.searchResultCount = this.searchResults.length
              if(this.searchProperties.value.streetName && this. searchProperties.value.streetNumber){
                this.searchResultMsg = "Found "+ this.searchResultCount+" result(s) for "+ this.searchProperties.value.streetNumber + " " + this.searchProperties.value.streetName
              }else if (this.searchProperties.value.streetName && !this. searchProperties.value.streetNumber){
                this.searchResultMsg = "Found "+ this.searchResultCount+" result(s) for "+ this.searchProperties.value.streetName
              }
              else{
                this.searchResultMsg = "Found "+ this.searchResultCount+" result(s) for "+ this.searchProperties.value.postalCode
              }
              this.storage.setItem("citizen_search_rslt_msg", this.searchResultMsg)
              this.dataSource = new MatTableDataSource(this.searchResults)
              setTimeout(() => {
                this.dataSource.paginator = this.paginator
                this.dataSource.sort = this.sort
              }, 200);
              this.loaderService.display(false);
             
             
              console.log(this.searchResults)
            }           
          },
          (error) => console.log(error)
        );
   }
  }

  modifier(body){
    let a = JSON.stringify(body.value)
    this.storage.setItem("citizen_searchProp", a)
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
    this.searchProperties.get('streetNumber').setValue("")
    this.searchProperties.get('streetName').setValue("")
    this.searchProperties.get('streetType').setValue("")
    this.searchProperties.get('streetDirection').setValue("")
    this.searchProperties.get('postalCode').setValue("")
    this.storage.removeItem("citizen_searchProp")
  }
  searchShow(){
    this.searchResultshow = false
    this.searchForm = true
    this.storage.removeItem("citizen_searchRslt")
    this.storage.removeItem("citizen_search_rslt_msg")
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
