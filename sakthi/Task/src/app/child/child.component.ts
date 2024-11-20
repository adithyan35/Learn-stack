import { ChangeDetectionStrategy, Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
@Input()
arrayOfObject:any=[]
@Output()
event=new EventEmitter;
selected(e:any){
  this.event.emit(e.target.innerText);
}
}
