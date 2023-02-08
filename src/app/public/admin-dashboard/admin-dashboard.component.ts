import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  constructor(private router:Router){}
  icon = 'assets/img/LF_Icon.png';

  logout(event:MouseEvent){
    event.preventDefault();
    this.router.navigateByUrl('/login-admin');
  }
}
