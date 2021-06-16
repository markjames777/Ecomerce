import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
loggedIn :boolean;
  constructor(public authservice : AuthService, public router:Router) { }

    
  
  ngOnInit(): void {
  

  }

  logout()
  {
      this.authservice.logout();
      this.router.navigate(['login']);
  }

  login()
  {
    this.router.navigate(['login']);
  }

}
