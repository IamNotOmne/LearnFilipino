import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-user',
  templateUrl: './student-user.component.html',
  styleUrls: ['./student-user.component.css']
})
export class StudentUserComponent implements OnInit{

  constructor (private http: HttpClient){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem('token')}`,
    });

    this.http.get('http://localhost:8000/loginStudent',{headers: headers}).subscribe(
      result=>console.log(result)
    );
  }
  studentDash:any;
  yourURL: string = "assets/img/van.jpg";
  sName = "Student Name";

  selectFiles(event:any){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.yourURL = event.target.result;
      }
    }
  }

}
