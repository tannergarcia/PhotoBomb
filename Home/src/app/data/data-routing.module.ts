import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account_display';
import { LoginComponent } from './page_login';
import { RegisterComponent } from './page_register';

const routes: Routes = [
    {
        path: '', component: AccountComponent,
        children: [
            { path: 'login', component: LoginComponent }, { path: 'register', component: RegisterComponent }
        ]
    }
];

@NgModule
({
    imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})

export class DataRoutingModule 
{
    routing(){
        this.routing();
    }
 }