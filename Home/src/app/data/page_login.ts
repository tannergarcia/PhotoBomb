import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { DataService, WarningService } from '../services';


@Component({ templateUrl: 'page_login.html' })
export class LoginComponent implements OnInit {

    form!: FormGroup;
    loading = false;
    accept = false;
    

    constructor(
        private formation: FormBuilder, private path: ActivatedRoute, private routes: Router, private account: DataService, private warns: WarningService
    ) 
    { 

    }

    ngOnInit() 
    {
        this.form = this.formation.group({username: ['', Validators.required], password: ['', Validators.required]});
    }

    get preset() 
    { 
        return this.form.controls; 
    }

    toggleSubmission() {
        this.fieldTextType = !this.fieldTextType;
        this.show = !this.show;

        this.loading = true;
        this.account.login(this.preset.username.value, this.preset.password.value).pipe(first()).subscribe({
                next: () => 
                {
                    const routeBack = this.path.snapshot.queryParams['returnUrl'] || '/';
                    this.routes.navigateByUrl(routeBack);
                },
                error: (error: string) => {
                    this.warns.display_error(error);
                    this.loading = false;
                }
            });
    }

    onSubmit() {
        this.accept = true;

        this.warns.clear_warnings();

        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.account.login(this.preset.username.value, this.preset.password.value).pipe(first()).subscribe({
                next: () => 
                {
                    const routeBack = this.path.snapshot.queryParams['returnUrl'] || '/';
                    this.routes.navigateByUrl(routeBack);
                },
                error: (error: string) => {
                    this.warns.display_error(error);
                    this.loading = false;
                }
            });
    }

    fieldTextType: boolean = false;
    show: boolean = false;

    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
        this.show = !this.show;
    }
    
    
}


