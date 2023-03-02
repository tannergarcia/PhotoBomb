import { Component } from '@angular/core';

import { DataService } from './services';
import { UserData } from './icons';
import { environment } from '../environments/environment';

@Component({ selector: 'app', templateUrl: 'app.component.html' })

export class AppComponent {
    user?: UserData | null;

    constructor(private accounts: DataService) {
        this.accounts.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accounts.logout();
    }

    create(){
        this.accounts.user.subscribe();
    }

    display(){
        this.accounts.user.pipe();
    }

    
}