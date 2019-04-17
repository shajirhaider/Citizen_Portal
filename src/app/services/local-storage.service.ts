import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(name: string, value:string){
    return localStorage.setItem(name, value)
  }

  getItem(name: string){
    return localStorage.getItem(name)
  }

  removeItem(name: string){
    return localStorage.removeItem(name)
  }
}
