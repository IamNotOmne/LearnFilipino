import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import {CreatedAccounts} from 'src/app/created-accounts'
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Apply } from '../home/apply.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit{
 id:any;
//  addForm:any;
 data:any;
 TeacherArray:any[]=[];
  isResultLoaded =false;
//  apply = new Apply();
 teacher = new CreatedAccounts();
 constructor (private dataService:DataService, private router: Router, private formBuilder: FormBuilder, private url:ActivatedRoute, private http:HttpClient){
  // this.addForm = this.formBuilder.group({
  //   firstname:['', Validators.required],
  //   lastname:['',[Validators.required, Validators.maxLength(20)]],
  //   email:['',[Validators.required, Validators.maxLength(20)]],
  //   city:['',[Validators.required, Validators.maxLength(20)]],
  //   degree:['',[Validators.required, Validators.maxLength(20)]],
  //   school_graduated:['',[Validators.required, Validators.maxLength(20)]],
  //   qrcode:['',Validators.required],
  //   language:['',[Validators.required, Validators.maxLength(20)]],
  //   description:['',Validators.required],
  // })

 }
  ngOnInit(): void {
     this.id=this.url.snapshot.params['id'];
     this.getData();
      // if(this.teacher>0){
      //   this.dataService.getSingleTeacher(this.teacher).subscribe ((
      //     (data:any)=>{
      //       // console.log(data);
      //     }
      //   ))
      // }
      // this.setAuthorized(this.data)


  }
getData(){
  this.dataService.getOneTeacher(this.id).subscribe(
    res=>{
      console.log(res);
      this.data=res;
      this.teacher=this.data;
    }
  )
}
getAllTeacher(){
  this.http.get('http://127.0.0.1:8000/api/appliedTeachers').subscribe((resultData:any)=>{
    this.isResultLoaded = true;
    // console.log(resultData);
    this.TeacherArray = resultData;
  })
}
acceptTeacher(){
  this.dataService.accepted(this.teacher).subscribe(res =>{
    console.log(res);
    this.data=res;
      this.teacher=this.data;
      this.http.delete("http://127.0.0.1:8000/api/appliedTeachers"+ "/"+ this.id).subscribe((resultData: any)=>
      {
        this.router.navigateByUrl('/admin-dashboard');
          this.getAllTeacher();

      });
    // this.route.navigate(['/admin-dashboard']);
  })
}

  // onSubmit(){
  //   this.dataService.addTeacher(this.addForm.value).subscribe(
  //     (data:any)=>{
  //       this.route.navigate(['/']);
  //     },
  //       error =>{
  //         alert(error);
  //       }
  //   )
  // }
}
