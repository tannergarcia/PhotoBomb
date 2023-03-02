import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableDisplayComponent } from './table_display';
import { TableComponent } from './table';
import { UserData } from '@app/icons';

const routes: Routes = [
    {
        path: '', component: TableDisplayComponent,
        children: [{ path: '', component: TableComponent}]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserListRoutingModule { 

    display(){
        let x = "display-userlist";
        const y = "table";
    }
}