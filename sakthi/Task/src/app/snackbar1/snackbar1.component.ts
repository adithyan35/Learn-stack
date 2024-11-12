import { Component, inject } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'snackbar1',
  templateUrl: './snackbar1.component.html',
  styleUrl: './snackbar1.component.scss'
})
export class Snackbar1Component {
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,
      {panelClass: ['snackbar-component-one']}
    );
    
  }
}
