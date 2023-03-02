import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { AccountComponent } from './account_display';
import { LoginComponent } from './page_login';
import { RegisterComponent } from './page_register';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DataRoutingModule
    ],
    declarations: [
        AccountComponent,
        LoginComponent,
        RegisterComponent
    ]
})
export class DataModule { }