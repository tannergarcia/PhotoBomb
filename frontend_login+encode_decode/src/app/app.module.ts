import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { JwtInterceptor } from './authweb/jwt.interceptor';
import { RegisterComponent } from './register/register.component';
//import { AlertComponent } from './warnings';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { WarningsComponent } from './warnings/warnings.component';
import {MatInputModule} from '@angular/material/input';

//encode decode
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ImagebtnsComponent } from './imagebtns/imagebtns.component';
import { MatDividerModule } from '@angular/material/divider';
import { TextboxComponent } from './textbox/textbox.component';
import { UploadComponent } from './upload/upload.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DecodeComponent } from './decode/decode.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EncodeComponent } from './encode/encode.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WarningsComponent,
    ToolbarComponent,
    ImagebtnsComponent,
    TextboxComponent,
    UploadComponent,
    DecodeComponent,
    EncodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatDividerModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }