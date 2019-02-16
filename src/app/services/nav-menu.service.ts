import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  constructor() { }
  nav = [
    {text: "Apply, Register and Play"},
    {text:"Parks, Recreation and Culture" },
    {text:"Build, Invest and Grow"},
    {text:"Learn About"},
    {text: "Your City"},
    {text:"How Do I?"}
  ]
}
