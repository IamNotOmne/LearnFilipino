import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {  HttpHeaders } from '@angular/common/http';
import { TeacherListComponent } from '../public/student-dashboard/teacher-list/teacher-list.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string;
  url: string ='http://localhost:8000';

  constructor(private httpClient:HttpClient) { }

  //ADMINNNNN

  login(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/login', data);
  }

  //TEACHERSSSS

  addTeacher(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/apply', data);

  }
  getTeachersData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/appliedTeachers');
  }
listArticles(){
  return this.httpClient.get<any>(this.url + `/api/acteacher`);
}

  // getSingleTeacher(id:any){
  //   return this.httpClient.get<TeacherListComponent[]>(this.baseUrl+'view.php?id='+id);
  // }



  loginTeacher(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/loginTeacher', data);
  }

  updateTeacher(id:any,data:any){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateTeacher'+id, data);
  }

  accepted(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/acteacher', data);
  }
  acceptedbooking(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/acceptbook', data);
  }


  getOneTeacher(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/getoneteacher/'+id);
  }
  //LEARNERSSSSS
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/learners');
  }
  insertData(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/registerlearner', data);
  }

  loginStudent(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/loginStudent', data);
  }

  getBook(){
    return this.httpClient.get('http://127.0.0.1:8000/api/show');
  }
  insertBook(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/booking', data);
  }

  getOneBook(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/getonebook/'+id);
  }

}
