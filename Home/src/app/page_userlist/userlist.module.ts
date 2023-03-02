import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './userlist-routing.module';
import { TableDisplayComponent } from './table_display';
import { TableComponent } from './table';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserListRoutingModule
    ],
    declarations: [
        TableDisplayComponent,
        TableComponent
    ]
})
export class UsersModule { }