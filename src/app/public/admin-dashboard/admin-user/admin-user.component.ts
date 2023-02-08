import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Apply } from '../../home/apply.model';
import { AdminUser } from './admin-user.model';
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit{
  TeacherArray:any[]=[];
  StudentArray:any[]=[];
  isResultLoaded =false;
  isUpdateFormActive=false;
  id:any;
  data:any;
  apply = new Apply();
  ApprovedTeacher:any[]=[];
  articles: any;
  constructor(private http:HttpClient, private dataService:DataService, private route:ActivatedRoute) {
    this.getAllStudent();
    this.getAllTeacher();
    this.showArticles();
  }
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
      // this.getData();

    // const headers = new HttpHeaders({
    //   'Authorization' : `Bearer ${localStorage.getItem('token')}`,
    // });

    // this.http.get('http://localhost:8000/login',{headers: headers}).subscribe(
    //   result=>console.log(result)
    // );
  }
  // getData(){
  //   this.dataService.getOneTeacher(this.id).subscribe(res=>{
  //     this.data=res;
  //    this.apply=this.data;
  //    console.log(res)
  //   })
  // }

// For APproved APplicants
  // getAllAccepted(){
  //   this.http.get('http://127.0.0.1:8000/api/acteacher').subscribe((resultData:any)=>{
  //     this.isResultLoaded = true;
  //     // console.log(resultData);
  //     this.ApprovedTeacher = resultData;
  //   })
  // }
showArticles(){
  this.articles = this.dataService.listArticles().subscribe(article=>{
    this.articles= article;
    console.log(this.articles);
  });
}
  getAllTeacher(){
    this.http.get('http://127.0.0.1:8000/api/appliedTeachers').subscribe((resultData:any)=>{
      this.isResultLoaded = true;
      // console.log(resultData);
      this.TeacherArray = resultData;
    })
  }
  getAllStudent(){
    this.http.get('http://127.0.0.1:8000/api/learners').subscribe((resultData:any)=>{
      this.isResultLoaded = true;
      // console.log(resultData);
      this.StudentArray = resultData;
    })
  }
  setDelete(data: any)
  {
    if (confirm('Are you sure you want to DELETE this application?')) {
      this.http.delete("http://127.0.0.1:8000/api/appliedTeachers"+ "/"+ data.id).subscribe((resultData: any)=>
      {
          console.log(data);
          alert("Applicant Deleted")
          this.getAllTeacher();

      });
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }



  }
  // public error =null;
  // accept(data:any)
  // {
  //   // console.log(this.form);
  //   this.dataService.accepted(this.data).subscribe((resultData: any)=>
  //   {
  //     console.log(data);
  //     alert("Employee Accepted")
  //   });

  // }
  // updateData(){
  //   this.dataService.updateTeacher(this.id,this.teacher).subscribe(res=>{

  //   })
  // }
}
