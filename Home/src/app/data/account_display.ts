import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../services';

@Component({ templateUrl: 'account_display.html' })

export class AccountComponent {
    constructor(
        private router: Router,
        private accountService: DataService
    ) 
    
    {
        if (this.accountService.userValue) {
            this.router.navigate(['/']);
        }
    }
}
