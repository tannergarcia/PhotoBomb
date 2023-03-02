import { Component } from '@angular/core';

import { DataService } from '../services';
import { UserData } from '../icons';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    data: UserData | null;

    constructor(private account: DataService) {
        this.data = this.account.userValue;
        console.log(this.data?.firstName);
    }
}