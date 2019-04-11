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
  

  constructor() { }

}
