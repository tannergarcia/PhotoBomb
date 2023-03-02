import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { DataService } from '../services';

@Component({ templateUrl: 'table.html' })
export class TableComponent implements OnInit {
    userValue?: any[];

    constructor(private accountService: DataService) {}

    ngOnInit() {
        this.accountService.getAll().pipe(first()).subscribe(userValue => this.userValue = userValue);
    }

    deleteUser(id: string) {
        const value = this.userValue!.find(vx => vx.id === id);
        value.isDeleting = true;
        this.accountService.delete(id).pipe(first()).subscribe(() => this.userValue = this.userValue!.filter(x => x.id !== id));
    }
}