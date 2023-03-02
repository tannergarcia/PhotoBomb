import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { backend } from './backend';

import { AppRoutingModule } from './app-routing.module';
import { WebToken, Catch } from './backend';
import { AppComponent } from './app.component';
import { AlertComponent } from './warnings';
import { HomeComponent } from './page_home';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: WebToken, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: Catch, multi: true },
        backend
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };