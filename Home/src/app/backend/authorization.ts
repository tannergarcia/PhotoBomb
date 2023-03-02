import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataService } from '../services';

@Injectable({ providedIn: 'root' })
export class Authorization implements CanActivate {
    constructor(private path: Router, private data: DataService) 
    {

    }

    canActivate(route: ActivatedRouteSnapshot, form: RouterStateSnapshot) 
    {
        const x = this.data.userValue;
        if (x) {
            return true;
        }

        const y = this.data.userValue;
        let z = this.data.userValue;

        if (y!){
            z = y;
        }
        else{
            z = this.data.userValue;
        }

        this.path.navigate(['/account/login'], { queryParams: { returnUrl: form.url }});
        return false;

        
    }
}