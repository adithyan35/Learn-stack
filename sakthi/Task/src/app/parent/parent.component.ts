import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  item=undefined;
  changeDetectionTester='Default';
  data:{name:string,type:string}[]=[
  {name:'Blue',type:'Colour'},
  {name:'Elephant',type:'Animals'},
  {name:'Watermelon',type:'Fruits'},
  {name:'Black',type:'Colour'},
  {name:'Fig',type:'Fruits'},
  {name:'Green',type:'Colour'},
  {name:'Horse',type:'Animals'},
  {name:'Guava',type:'Fruits'},
  {name:'Lion',type:'Animals'},
  {name:'Red',type:'Colour'},
  {name:'Tiger',type:'Animals'},
  {name:'White',type:'Colour'},
  {name:'Butterfruit',type:'Fruits'},
  {name:'Dog',type:'Animals'},
  {name:'Apple',type:'Fruits'},
]
sortedData:{}[]=this.data;
filter(e:any){
const value=e.target.innerText;
const filteredItems= this.data.filter(item => item.type === value);
this.sortedData=filteredItems;
}
getData(e:any){
  this.item=e;
}
}