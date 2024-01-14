import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  oszlopok=[
    {key:"id", text:"Id", type:"Checkbox"},
    {key:"cim", text:"Cim", type:"Text"},
    {key:"datum", text:"Dátum", type:"Text"},
    {key:"fo", text:"Létszám", type:"Text"},
    {key:"iranyitoszam", text:"Irányitószám", type:"text"},
    {key:"nev", text:"Név", type:"text"},
  ]
  constructor() { }
  
  getOszlopok(){
    return this.oszlopok
  }
}
