import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})
export class LoginTeacherComponent {
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
    // console.log(this.form);
    return this.dataService.loginTeacher(this.form).subscribe(
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
    localStorage.setItem('token',data.token );
    this.router.navigateByUrl('/teacher-dashboard');
  }
}

