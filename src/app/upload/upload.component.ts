import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DecodeComponent } from '../decode/decode.component';
import { EncodeComponent } from '../encode/encode.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  fileName = '';
  //ipAddy = '100.64.5.189';
  ipAddy = 'localhost'
  formData = new FormData();
  hide = true;
  message!: string;
  


  constructor(private httpClient: HttpClient, private dialog: MatDialog) {
    hide: true;
  }

  

  openDecode() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;

    this.dialog.open(DecodeComponent, dialogConfig);
  }

  openEncode() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;

    this.dialog.open(EncodeComponent, dialogConfig);
  }

  getDecoded(){
    return this.httpClient.get('http://' + this.ipAddy +':8080/upload/encode');
  }

  onFileSelected(event: Event) {

    const target= event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

      if (file) {

          this.fileName = file.name;        

          this.formData.append("uploadfile", file);
          this.formData.append("imagetext", "imageText");
          
      }

  }

  onUpload(){
    const upload$ = this.httpClient.post('http://' + this.ipAddy +':4200/upload/encode', this.formData, //8080
    {
      withCredentials: true
    });       
    upload$.subscribe();
    console.log("Sent");
  }
}


