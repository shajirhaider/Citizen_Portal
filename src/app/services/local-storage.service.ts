import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(name: string, value:string){
    return sessionStorage.setItem(name, value)
  }

  getItem(name: string){
    return sessionStorage.getItem(name)
  }

  removeItem(name: string){
    return sessionStorage.removeItem(name)
  }
  clear(){
    return sessionStorage.clear()
  }
}
