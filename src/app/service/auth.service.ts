import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, BehaviorSubject } from "rxjs";
import { map } from 'rxjs/operators';


import { User } from "../Models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = "http://localhost:3000";
  
  public isAuthenticated: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
   // private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) { this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  this.currentUser = this.currentUserSubject.asObservable();}


  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}


  public login(body: any,successCallback, failureCallback) {
  this.http.post<any>(`${this.url}/auth`, body).subscribe(async res =>{
    this.isAuthenticated.next(true);
    
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify(res));
   // this.currentUserSubject.next(user);
    //console.log(this.currentUser);
    //return user;
    successCallback(res);
},
err => {
  this.isAuthenticated.next(false);
  console.log(err);
  failureCallback(err);
}

);



  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.isAuthenticated.next(false);
    this.currentUserSubject.next(null);
  }


}
