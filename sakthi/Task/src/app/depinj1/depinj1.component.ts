import { Component } from '@angular/core';
import { ColshapeService } from '../services/colshape.service';

@Component({
  selector: 'depinj1',
  templateUrl: './depinj1.component.html',
  styleUrl: './depinj1.component.scss'
})
export class Depinj1Component {
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
