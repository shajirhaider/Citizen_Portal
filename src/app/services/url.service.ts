import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  public LOGIN = 'authenticatePublicUser'
  public Get_Valid_Street_Types = 'getValidStreetTypes'
  public Get_Valid_Street_Directions = 'getValidStreetDirections'
  public Get_Valid_Street = 'getValidStreet'
  public Search_Property = 'searchProperty'
  public Search_Folder_By_Property = 'searchFolderByProperty'
  public Search_Mobile_Sign = 'searchMobileSign'
  public Update_People_Internet_Password = 'updatePeopleInternetPassword'
  public Get_People = 'getPeople'
  public Get_Valid_UnitTypes = 'getValidUnitTypes'
  public Get_Valid_City ='getValidCity'
  public Get_Valid_Provinces ='getValidProvinces'
  public Get_Valid_Communities ='getValidCommunities'
  public Get_Valid_County = 'getValidCounty'

  constructor() { }

}
