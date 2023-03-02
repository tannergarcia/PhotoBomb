import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { DataService, WarningService } from '../services';

@Component({ templateUrl: 'page_register.html' })
export class RegisterComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;

    constructor
    (
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: DataService,
        private alertService: WarningService
    ) 
    { 

    }

    ngOnInit() 
    {
        this.form = this.formBuilder.group({firstName: ['', Validators.required], lastName: ['', Validators.required], username: ['', Validators.required], password: ['', [Validators.required, Validators.minLength(6)]]});
    }

    clicked(){
        this.submitted = true;

        this.alertService.clear_warnings();

        if (this.form.invalid) {
            return;
        }

        this.form = this.formBuilder.group({firstName: ['', Validators.required], lastName: ['', Validators.required], username: ['', Validators.required], password: ['', [Validators.required, Validators.minLength(6)]]});
    }


    onSubmit() 
    {
        this.submitted = true;

        this.alertService.clear_warnings();

        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.register(this.form.value).pipe(first()).subscribe({
                next: () => 
                {
                    this.alertService.display_success('Registration successful', { static_route: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: (error: string) => 
                {
                    this.alertService.display_error(error);
                    this.loading = false;
                }
            });
    }

    get current() 
    { 
        return this.form.controls;
    }
    
}

