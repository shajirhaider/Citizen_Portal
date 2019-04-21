import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from './../../services/http.service';
import { UrlService } from './../../services/url.service';
import { LoaderService } from './../../services/loader.service';
import { LocalStorageService } from './../../services/local-storage.service'
import { Observable, from } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  selector: 'app-update-personal-info',
  templateUrl: './update-personal-info.component.html',
  styleUrls: ['./update-personal-info.component.css']
})
export class UpdatePersonalInfoComponent implements OnInit {

  updateInfo = new FormGroup({
    addrStreet: new FormControl(''),
    addrStreetType: new FormControl(''),
    addrStreetDirection: new FormControl(''),
    addrStreetPrefix: new FormControl(''),
    addrPrefix: new FormControl(''),
    addrCity: new FormControl(''),
    addrCountry: new FormControl(''),
    addrProvince: new FormControl(''),
    addrHouse: new FormControl(''),
    addrPostal: new FormControl(''),
    addrUnit: new FormControl(''),
    addrUnitType: new FormControl(''),
    addressLine1: new FormControl(''),
    addressLine2: new FormControl(''),
    addressLine3: new FormControl(''),
    addressLine4: new FormControl(''),
    addressLine5: new FormControl(''),
    addressLine6: new FormControl(''),
    community: new FormControl(''),
    internetAccess: new FormControl(''),
  });
  organizationName: String;
  name: String;
  phone1: String;
  emailAddress: String;
  peopleData:any[];

  streetTypes : StreetType[];
  filteredStreetTypes: Observable<StreetType[]>;
  streetNames : StreetName[];
  filteredStreetNames: Observable<StreetName[]>;
  streetDirections : StreetDirection[];
  filteredstreetDirection: Observable<StreetDirection[]>;
  unitTypes : any[];
  filteredUnitTypes: Observable<any[]>;
  city : any[];
  filteredCity: Observable<any[]>;
  province : any[];
  filteredProvince: Observable<any[]>;
  county : any[];
  filteredCounty: Observable<any[]>;
  community : any[];
  filteredCommunity: Observable<any[]>;
  countryList: any[] = [ ]
  filteredCountry: Observable<any[]>;
  

  constructor(private httpService: HttpService, private url: UrlService, private loaderService: LoaderService, private storage : LocalStorageService) {}

  ngOnInit() {
    this.getValidStreetType()
    this.getValidStreetDirections()
    this.getValidStreet()
    this.getValidUnitTypes()
    this.getVaildCity()
    this.getVaildProvince()
    this.getVaildCounty()
    this.getVaildCommutinites()
    this.getValidCountry()
  }
  getValidStreetType(){ 
    this.loaderService.display(true);
    let lid = "";
    if(this.storage.getItem("lid")){
      lid = this.storage.getItem("lid")
    }
    else{
      lid = ""
    }
    let body = {
      "token":"amandaportal", 
      "lid":lid
    }
    this.httpService.post(this.url.Get_Valid_Street_Types, body)
      .subscribe(
        (response) =>{
         this.streetTypes = response["body"]

        this.filteredStreetTypes = this.updateInfo.get('addrStreetType').valueChanges
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
    let lid = "";
    if(this.storage.getItem("lid")){
      lid = this.storage.getItem("lid")
    }
    else{
      lid = ""
    }
    let body = {
      "token":"amandaportal", 
      "lid":lid
    }
    this.httpService.post(this.url.Get_Valid_Street_Directions, body)
      .subscribe(
        (response) =>{
          this.streetDirections = response["body"]
        this.filteredstreetDirection= this.updateInfo.get('addrStreetDirection').valueChanges
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
    let lid = "";
    if(this.storage.getItem("lid")){
      lid = this.storage.getItem("lid")
    }
    else{
      lid = ""
    }
    let body = {
      "token":"amandaportal", 
      "lid":lid
    }
    this.httpService.post(this.url.Get_Valid_Street, body)
      .subscribe(
        (response) =>{
          this.streetNames = response["body"]
          this.filteredStreetNames = this.updateInfo.get('addrStreet').valueChanges
          .pipe(
            startWith<string | StreetName>(''),
            map(value => typeof value === 'string' ? value : value.propStreet),
            map(name => name ? this._filterStreetName(name) : this.streetNames.slice())
          );
          console.log(this.streetNames)
          this.getPeople()
        },
        (error) => console.log(error)
    );
  }
  getValidUnitTypes(){
    let lid = "";
    if(this.storage.getItem("lid")){
      lid = this.storage.getItem("lid")
    }
    else{
      lid = ""
    }
    let body = {
      "token":"amandaportal", 
      "lid":lid
    }
    this.httpService.post(this.url.Get_Valid_UnitTypes, body)
      .subscribe(
        (response) =>{
          this.unitTypes = response["body"]
          this.filteredUnitTypes = this.updateInfo.get('addrUnitType').valueChanges
          .pipe(
            startWith<string | any>(''),
            map(value => typeof value === 'string' ? value : value.addressUnitType),
            map(name => name ? this._filterUnitType(name) : this.unitTypes.slice())
          );
        },
        (error) => console.log(error)
    );
  }

  getVaildCity(){
    let lid = "";
    if(this.storage.getItem("lid")){
      lid = this.storage.getItem("lid")
    }
    else{
      lid = ""
    }
    let body = {
      "token":"amandaportal", 
      "lid":lid
    }
    this.httpService.post(this.url.Get_Valid_City, body)
      .subscribe(
        (response) =>{
          this.city = response["body"]
          this.filteredCity = this.updateInfo.get('addrCity').valueChanges
          .pipe(
            startWith<string | any>(''),
            map(value => typeof value === 'string' ? value : value.city),
            map(name => name ? this._filterCity(name) : this.city.slice())
          );
        },
        (error) => console.log(error)
    );
  }

  getVaildProvince(){
    let lid = "";
    if(this.storage.getItem("lid")){
      lid = this.storage.getItem("lid")
    }
    else{
      lid = ""
    }
    let body = {
      "token":"amandaportal", 
      "lid":lid
    }
    this.httpService.post(this.url.Get_Valid_Provinces, body)
      .subscribe(
        (response) =>{
          this.province = response["body"]
          this.filteredProvince = this.updateInfo.get('addrProvince').valueChanges
          .pipe(
            startWith<string | any>(''),
            map(value => typeof value === 'string' ? value : value.provinceName),
            map(name => name ? this._filterProvince(name) : this.province.slice())
          );
        },
        (error) => console.log(error)
    );
  }

  getVaildCounty(){
    let lid = "";
    if(this.storage.getItem("lid")){
      lid = this.storage.getItem("lid")
    }
    else{
      lid = ""
    }
    let body = {
      "token":"amandaportal", 
      "lid":lid
    }
    this.httpService.post(this.url.Get_Valid_County, body)
      .subscribe(
        (response) =>{
          this.county = response["body"]
          this.filteredCounty = this.updateInfo.get('addrProvince').valueChanges
          .pipe(
            startWith<string | any>(''),
            map(value => typeof value === 'string' ? value : value.provinceName),
            map(name => name ? this._filterProvince(name) : this.province.slice())
          );
        },
        (error) => console.log(error)
    );
  }

  getVaildCommutinites(){
    let lid = "";
    if(this.storage.getItem("lid")){
      lid = this.storage.getItem("lid")
    }
    else{
      lid = ""
    }
    let body = {
      "token":"amandaportal", 
      "lid":lid
    }
    this.httpService.post(this.url.Get_Valid_Communities, body)
      .subscribe(
        (response) =>{
          this.community = response["body"]
          this.filteredCommunity = this.updateInfo.get('addrProvince').valueChanges
          .pipe(
            startWith<string | any>(''),
            map(value => typeof value === 'string' ? value : value.provinceName),
            map(name => name ? this._filterProvince(name) : this.province.slice())
          );
        },
        (error) => console.log(error)
    );
  }
  getPeople(){
    let lid = "";
    if(this.storage.getItem("lid")){
      lid = this.storage.getItem("lid")
    }
    else{
      lid = ""
    }
    let body = {
      "token":"amandaportal", 
      "lid":lid,
      "peopleRSN":+this.storage.getItem("peopleRSN")
    }
    this.httpService.post(this.url.Get_People, body)
      .subscribe(
        (response) =>{
          this.updateInfo.patchValue(response["body"])
          this.peopleData = response["body"]
          this.streetNameObj(response["body"]["addrStreet"])
          this.streetTypeObj(response["body"]["addrStreetType"])
          this.streetDirectionObj(response["body"]["addrStreetDirection"])
          this.cityObj(response["body"]["addrCity"])
          this.provinceObj(response["body"]["addrProvince"])
          this.countryObj(response["body"]["addrCountry"])
          this.organizationName = response["body"]["organizationName"];
          this.name = response["body"]["nameFirst"]+" "+response["body"]["nameMiddle"]+" "+response["body"]["nameLast"];
          this.phone1 = response["body"]["phone1"];
          this.emailAddress = response["body"]["emailAddress"]
          this.loaderService.display(false);
        },
        (error) => console.log(error)
      );
  }
  getValidCountry(){
    let lid = "";
    if(this.storage.getItem("lid")){
      lid = this.storage.getItem("lid")
    }
    else{
      lid = ""
    }
    let body = {
      "token":"amandaportal", 
      "lid":lid
    }
    this.httpService.post(this.url.Get_Valid_Countries, body)
      .subscribe(
        (response) =>{
          this.countryList = response["body"]
          this.filteredCountry = this.updateInfo.get('addrCountry').valueChanges
          .pipe(
            startWith<string | any>(''),
            map(value => typeof value === 'string' ? value : value.countryName),
            map(name => name ? this._filterCountry(name) : this.countryList.slice())
          );
      },
        (error) => console.log(error)
    );
        
  }
  updatePeople(){
    this.loaderService.display(true);
    let body = this.modifier(this.updateInfo)
    console.log("body",body)
    this.httpService.post(this.url.Update_People, body)
      .subscribe(
        (response) =>{   
          console.log(response)
        
          this.loaderService.display(false);      
        },
        (error) => console.log(error)
      );
  }
  modifier(data){

    let obj = data.value;
    this.peopleData["addrStreet"] = obj.addrStreet.propStreet,
    this.peopleData["addrStreetType"] = obj.addrStreetType.id,
    this.peopleData["addrStreetDirection"] = obj.addrStreetDirection.addressDirection,
    this.peopleData["addrStreetPrefix"] = obj.addrStreetPrefix,
    this.peopleData["addrPrefix"] = obj.addrPrefix,
    this.peopleData["addrCity"] = obj.addrCity.city,
    this.peopleData["addrCountry"] = obj.addrCountry.countryCode,
    this.peopleData["addrProvince"] = obj.addrProvince.provinceType,
    this.peopleData["addrHouse"] = obj.addrHouse,
    this.peopleData["addrPostal"] = obj.addrPostal,
    this.peopleData["addrUnit"] = obj.addrUnit,
    this.peopleData["addrUnitType"] = obj.addrUnitType,
    this.peopleData["addressLine1"] = obj.addressLine1,
    this.peopleData["addressLine2"] = obj.addressLine2,
    this.peopleData["addressLine3"] = obj.addressLine3,
    this.peopleData["addressLine4"] = obj.addressLine4,
    this.peopleData["addressLine5"] = obj.addressLine5,
    this.peopleData["addressLine6"] = obj.addressLine6,
    this.peopleData["community"] = obj.community,
    this.peopleData["internetAccess"] = obj.internetAccess
    let body ={
      "lid": this.storage.getItem("lid"),
      "token": 'amandaportal',
      "data":this.peopleData
    }
    return body;

  }
  streetNameObj(val) {
    this.streetNames.forEach((iter) => {
    if (iter.propStreet === val){     
      this.updateInfo.get("addrStreet").setValue(iter)
      return;
    }
    });
  }

  streetTypeObj(val) {
    this.streetTypes.forEach((iter) => {
    if (iter.id === val){     
      this.updateInfo.get("addrStreetType").setValue(iter)
      return;
    }
    });
  }

  streetDirectionObj(val) {
    this.streetDirections.forEach((iter) => {
    if (iter.addressDirection === val){     
      this.updateInfo.get("addrStreetDirection").setValue(iter)
      return;
    }
    });
  }

  cityObj(val) {
    this.city.forEach((iter) => {
    if (iter.city === val){     
      this.updateInfo.get("addrCity").setValue(iter)
      return;
    }
    });
  }
  provinceObj(val) {
    this.province.forEach((iter) => {
    if (iter.provinceType === val){     
      this.updateInfo.get("addrProvince").setValue(iter)
      return;
    }
    });
  }

  countryObj(val) {
    this.countryList.forEach((iter) => {
    if (iter.countryCode === val){     
      this.updateInfo.get("addrCountry").setValue(iter)
      return;
    }
    });
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

  displayfilterUnitType(name?: any): string | undefined {
    return name ? name.addressUnitTypeDesc : undefined;
  }
  private _filterUnitType(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.unitTypes.filter(option => option.addressUnitTypeDesc.toLowerCase().indexOf(filterValue) === 0);
  }

  displayfilterCity(name?: any): string | undefined {
    return name ? name.city : undefined;
  }
  private _filterCity(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.city.filter(option => option.city.toLowerCase().indexOf(filterValue) === 0);
  }

  displayfilterProvince(name?: any): string | undefined {
    return name ? name.provinceName : undefined;
  }
  private _filterProvince(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.province.filter(option => option.provinceName.toLowerCase().indexOf(filterValue) === 0);
  }
  displayfilterCountry(name?: any): string | undefined {
    return name ? name.countryName : undefined;
  }
  private _filterCountry(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.countryList.filter(option => option.countryName.toLowerCase().indexOf(filterValue) === 0);
  }
}
