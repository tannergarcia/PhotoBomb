import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './page_home';
import { Authorization } from './backend';

const accountModule = () => import('./data/data.module').then(x => x.DataModule);
const usersModule = () => import('./page_userlist/userlist.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [Authorization] },
    { path: 'users', loadChildren: usersModule, canActivate: [Authorization] },
    { path: 'account', loadChildren: accountModule },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { 
    
}