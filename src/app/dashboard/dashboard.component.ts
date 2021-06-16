import { Component, OnInit } from '@angular/core';
import  {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  username : string;

  constructor(private localStorage : LocalStorageService) { }

  ngOnInit(): void {
   // console.log(localStorage.getItem('ngx-webstorage|user').username);
    
  }

}
