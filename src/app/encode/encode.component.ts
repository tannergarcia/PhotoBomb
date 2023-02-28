import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css']
})
export class EncodeComponent {

  constructor(
    public dialog: MatDialogRef<EncodeComponent>){}
  
  save() {
    this.dialog.close();
  }

  close() {
    this.dialog.close();
  }
}
