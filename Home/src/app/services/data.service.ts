import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { UserData } from '../icons';

@Injectable({ providedIn: 'root' })
export class DataService {
    private userSubject: BehaviorSubject<UserData | null>;
    public user: Observable<UserData | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    )
    {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }
    
    public get userValue() {
        if (this.userSubject.value == null){
            console.log("Error");
         }
        else{
            console.log("Data " + this.userSubject.value?.lastName);
        }
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<UserData>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(user: UserData) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<UserData[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<UserData>(`${environment.apiUrl}/users/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                if (id == this.userValue?.id) {
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                if (id == this.userValue?.id) {
                    this.logout();
                }
                return x;
            }));
    }
}