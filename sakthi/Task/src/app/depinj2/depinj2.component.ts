import { Component } from '@angular/core';
import { ColshapeService } from '../services/colshape.service';
@Component({
  selector: 'depinj2',
  templateUrl: './depinj2.component.html',
  styleUrl: './depinj2.component.scss'
})
export class Depinj2Component {
  constructor(
    private comService:ColshapeService
  ){}
  shape ='';
  colour='';
  colShapeClass='';
  btnArray:{}[]=[{'value':'rectangle','name':'Rectangle'},
                {'value':'square','name':'Square'},
                {'value':'triangle','name':'Triangle'},
                {'value':'circle','name':'Circle'}
  ]
  draw(){
    this.colShapeClass=this.comService.draw(this.shape,this.colour);
    console.log(this.btnArray[0]);
  }
}
