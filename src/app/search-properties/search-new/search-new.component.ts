import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { UrlService } from '../../services/url.service';
import { LoaderService } from '../../services/loader.service';
import { LocalStorageService } from '../../services/local-storage.service'
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';


export interface StreetName {
  propDesc: string;
}


@Component({
  selector: 'app-search-new',
  templateUrl: './search-new.component.html',
  styleUrls: ['./search-new.component.css']
})
export class SearchNewComponent implements OnInit {
  
  searchProperties = new FormGroup({
    fullAddress: new FormControl(''),
  });
  searchForm: Boolean = true;
  streetNames : StreetName[];
  filteredStreetNames: Observable<StreetName[]>;
  searchResultshow: boolean = false;
  msgShow: boolean = false;
  searchResults: any[] = [];
  addSpacer = " ";
  addComma= ","
  searchResultCount:number = 0;
  msg: String ="msg";
  searchResultMsg: string = '';
  address: String = "";
  btnShow: Boolean = false;
  agree:Boolean;
  agreeContent: Boolean = true;

  displayedColumns: string[] = ['propertyRoll', 'propArea', 'folderTypeDesc'];
  dataSource: MatTableDataSource<any[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpService: HttpService, 
              private router: Router,
              private url: UrlService, 
              private loaderService: LoaderService, 
              private storage : LocalStorageService) {

    if(this.storage.getItem("agree-content")){
      this.agreeContent = false;
    }
    if(this.storage.getItem("citizen_searchProp")){
      this.agreeContent = false;
      let a = JSON.parse(this.storage.getItem("citizen_searchProp"))
      this.searchProperties.setValue(a)
    }

    if(this.storage.getItem("citizen_searchRslt")){
      this.agreeContent = false;
      this.searchResultshow = true
      this.searchForm = false
      this.searchResults = JSON.parse(this.storage.getItem("citizen_searchRslt"))
      this.dataSource = new MatTableDataSource(this.searchResults)
      setTimeout(() => {
        this.dataSource.paginator = this.paginator
      }, 200);
      this.searchResultMsg = this.storage.getItem("citizen_search_rslt_msg")
    }
  }

  ngOnInit() {
  }

  getValidStreet(){
    // this.loaderService.display(true);   
    let lid = "";
    if(this.storage.getItem("lid")){
      lid = this.storage.getItem("lid")
    }
    else{
      lid = ""
    }

    var requestdata_test = {
       token: 'amandaportal',
       lid: '',
       rsn: 0,
       loginName: 'Hanif',
       url: 'http://demo.randomaccess.ca/amanda/api_fw/Services/ServiceMain.svc/json/'
    };

    // let requestdata: any = window["requestdata"];
   let requestdata: any = requestdata_test;
    this.httpService.getBaseUrl(requestdata.url);

    let body = {
      "token":"amandaportal", 
      "lid":lid,
      "fullAddress": this.searchProperties.value.fullAddress
    }
    console.log("address", body)
    this.httpService.post('searchPropertyAjax', body)
      .subscribe(
        (response) =>{
          this.streetNames = response["body"]
          this.filteredStreetNames = this.searchProperties.get('fullAddress').valueChanges
          .pipe(
            startWith<string | StreetName>(''),
            map(value => typeof value === 'string' ? value : value.propDesc),
            map(name => name ? this._filterStreetName(name) : this.streetNames.slice())
          );
          console.log(this.streetNames)
       this.loaderService.display(false);
        },
        (error) => console.log(error)
    );
  }
  searchProperty(){
    if( !this.searchProperties.value.fullAddress){
      this.msgShow = true;
      this.searchResultshow = false;
      this.msg = "No Address Selected."
    }else{
      this.loaderService.display(true);
      let body = this.modifier(this.searchProperties.value.fullAddress)
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
                this.searchResultMsg = "Found "+ this.searchResultCount+" result(s) for "+ this.searchProperties.value.rollNumber
              }
              this.storage.setItem("citizen_search_rslt_msg", this.searchResultMsg)
              this.dataSource = new MatTableDataSource(this.searchResults)
              setTimeout(() => {
                this.dataSource.paginator = this.paginator
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
    let a = JSON.stringify(body)
    this.storage.setItem("citizen_searchProp", a)
    let obj = body;
    var requestdata_test = {
      token: 'amandaportal',
      lid: '',
      rsn: 0,
      loginName: 'Hanif',
      url: 'http://demo.randomaccess.ca/amanda/api_fw/Services/ServiceMain.svc/json/'
   };
 
   // let requestdata: any = window["requestdata"];
  let requestdata: any = requestdata_test;
   this.httpService.getBaseUrl(requestdata.url);

    obj.streetType = body.propStreetType;
    obj.streetDirection = body.propStreetDirection;
    obj.streetName = body.propStreet;

    obj.token = requestdata.token;
    obj.lid = requestdata.lid
    obj.count = '0';
    console.log(obj)
    return obj;

  }
  clear(){
    this.searchProperties.get('streetNumber').setValue("")
    this.searchProperties.get('streetName').setValue("")
    this.searchProperties.get('streetType').setValue("")
    this.searchProperties.get('streetDirection').setValue("")
    this.searchProperties.get('unitNumber').setValue("")
    this.searchProperties.get('rollNumber').setValue("")
    this.storage.removeItem("citizen_searchProp")
  }
  searchShow(){
    this.searchResultshow = false
    this.searchForm = true
    this.storage.removeItem("citizen_searchRslt")
    this.storage.removeItem("citizen_search_rslt_msg")
  }
    
  localStorageDataRemove(){
    localStorage.removeItem("citizen_searchRslt")
    localStorage.removeItem("citizen_searchProp")
    localStorage.removeItem("citizen_search_rslt_msg")
    this.agreeContent =false;

  }


  displayfilterStreetName(name?: StreetName): string | undefined {
    return name ? name.propDesc : undefined;
  }
  private _filterStreetName(name: string): StreetName[] {
    const filterValue = name.toLowerCase();
    return this.streetNames.filter(option => option.propDesc.toLowerCase().indexOf(filterValue) === 0);
  }

}
