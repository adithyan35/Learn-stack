import { Component, inject } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'snackbar2',
  templateUrl: './snackbar2.component.html',
  styleUrl: './snackbar2.component.scss'
})
export class Snackbar2Component {
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,
      {panelClass: ['snackbar-component-two']}
    );
    
  }
}
