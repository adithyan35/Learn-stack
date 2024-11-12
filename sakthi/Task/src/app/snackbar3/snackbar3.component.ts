import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'snackbar3',
  templateUrl: './snackbar3.component.html',
  styleUrl: './snackbar3.component.scss'
})
export class Snackbar3Component {
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
