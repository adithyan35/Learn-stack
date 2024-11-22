import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColshapeService {

  constructor() { }
  draw(shape:string,colour:string){
return shape+' '+colour;
  }
}
