import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
//import { GlobalService } from '../global.service';
//import {SnackbarComponent} from '../snackbar/snackbar.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../service/auth.service';
import  {LocalStorageService} from 'ngx-webstorage';
import { first } from 'rxjs/operators';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm :FormGroup;
credential :any =[];
userType :boolean;
showErrorMessage :boolean = false;
errorMessage :string;
constructor(private httpClient: HttpClient,
private router : Router,public snackBar: MatSnackBar,private authService:AuthService,private localstorageService : LocalStorageService
) { }

ngOnInit() {
// this.credential = this.globalService.rows;
console.log(this.credential)

this.loginForm = new FormGroup(
{
username : new FormControl('',[Validators.required,Validators.email]),
password: new FormControl('',[Validators.required])
}
)
}



onLogin(form:FormGroup)
{
//this.credential = this.globalService.rows;

var user;
const self = this;

const data = { username: form.value.username, password: form.value.password };
     this.authService.login(data, self.loginSuccessHandler.bind(self),self.loginFailureHandler.bind(self));


 }


 loginSuccessHandler(res) {
  this.router.navigate(['dashboard']);
 }

 loginFailureHandler(err) {
   this.showErrorMessage = true;
   console.log("errror",err);
 }



}



// openSnackBar(message: string) {
// this.snackBar.openFromComponent(SnackbarComponent, {
// data: message,

// duration: 10000
// });
// }
