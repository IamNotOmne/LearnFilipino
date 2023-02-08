import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit{
  icon = 'assets/img/LF_Icon.png';
  public form={
    email:null,
    password:null
  }
  constructor(private dataService:DataService, private router:Router){}

  ngOnInit(): void {

  }
  public error =null;
  submitLogin(){
    console.log(this.form);
    return this.dataService.login(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );

  }
  handleError(error:any){
    this.error = error.error.error;
  }
  handleResponse(data:any){
    // console.log(data.token);
    // this.token.handle(data.token);
    this.router.navigateByUrl('/admin-dashboard');
  }
}
