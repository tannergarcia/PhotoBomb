import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { BehaviorSubject, finalize } from "rxjs";

const userLink = 'key';
let users: any[] = JSON.parse(localStorage.getItem(userLink)!) || [];

@Injectable()
export class Backend implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any>  {
        const { url, method, headers, body } = request;

        return handleRoute();

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users') && method === 'GET':
                    return getUserData();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getID();
                case url.match(/\/users\/\d+$/) && method === 'PUT':
                    return updateData();
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authorize();
                case url.endsWith('/users/register') && method === 'POST':
                    return registerUser();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteData();
                default:
                    return next.handle(request);
            }    
        }

        function authorize() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) return catchError('Username or password is incorrect');
            return result({
                ...basicDetails(user),
                token: 'fake-jwt-token'
            })
        }

        function registerUser() {
            const user = body

            if (users.find(x => x.username === user.username)) {
                return catchError('Username "' + user.username + '" has been taken.')
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem(userLink, JSON.stringify(users));
            return result();
        }

        function getUserData() {
            if (!isLoggedIn()) return invalid_Authorization();
            return result(users.map(x => basicDetails(x)));
        }

        function getID() {
            if (!isLoggedIn()) return invalid_Authorization();

            const user = users.find(x => x.id === idFromUrl());
            return result(basicDetails(user));
        }

        function updateData() {
            if (!isLoggedIn()) return invalid_Authorization();

            let params = body;
            let user = users.find(x => x.id === idFromUrl());

            if (!params.password) {
                delete params.password;
            }

            Object.assign(user, params);
            localStorage.setItem(userLink, JSON.stringify(users));

            return result();
        }

        function deleteData() {
            if (!isLoggedIn()) return invalid_Authorization();

            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem(userLink, JSON.stringify(users));
            return result();
        }

        function result(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(500)); 
        }

        function catchError(message: string) {
            return throwError(() => ({ error: { message } }))
                .pipe(materialize(), delay(500), dematerialize()); 
        }

        function invalid_Authorization() {
            return throwError(() => ({ status: 401, error: { message: 'Unauthorized' } }))
                .pipe(materialize(), delay(500), dematerialize());
        }

        function basicDetails(user: any) {
            const { id, username, firstName, lastName } = user;
            return { id, username, firstName, lastName };
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const backend = {
    provide: HTTP_INTERCEPTORS,
    useClass: Backend,
    multi: true
};