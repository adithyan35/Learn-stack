import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'divisible',
  templateUrl: './divisible.component.html',
  styleUrl: './divisible.component.scss'
})
export class DivisibleComponent {
  totalArr:number[]=[];
  value!:number;
  Active:boolean=false;
  clearBtn:boolean=true;
  inputLength=new FormControl(40);
  ngOnInit(){
     this.displayNumber();
  }
  ngAfterViewInit(){
      this.inputLength.valueChanges.pipe(distinctUntilChanged(),debounceTime(300)).subscribe(()=>{
this.displayNumber();
      })  
  }
  displayNumber(){
      const currentLength=parseInt(this.inputLength.value?.toString()||'');
      this.totalArr=[];
      for(let i=1;i<=currentLength;i++){
          this.totalArr.push(i);
      }
  }
  calc(num:number){
this.value=num;
this.Active=true;
this.clearBtn=false;
  }
  clear(){
      this.value=1;
      this.clearBtn=true;
  }
}
