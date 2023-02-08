import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Students } from '../../students';

@Component({
  selector: 'app-teacher-user',
  templateUrl: './teacher-user.component.html',
  styleUrls: ['./teacher-user.component.css']
})
export class TeacherUserComponent implements OnInit{
  BookingArray:any[]=[];
  BookingAccArray:any[]=[];
  isResultLoaded =false;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getAllBooking();
  }
  constructor(private http:HttpClient, private dataService:DataService, private route:ActivatedRoute) {
    this.getAllBookingAcc();
  }
  @Input() studentIn!: Students;

  yourURL: string = "assets/img/leah.jpg";

  selectFiles(event:any){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.yourURL = event.target.result;
      }
    }
  }
  getAllBooking(){
    this.http.get('http://127.0.0.1:8000/api/show').subscribe((resultData:any)=>{
      this.isResultLoaded = true;
      // console.log(resultData);
      this.BookingArray = resultData;
    })
  }
  getAllBookingAcc(){
    this.http.get('http://127.0.0.1:8000/api/displaybook').subscribe((resultData:any)=>{
      this.isResultLoaded = true;
      console.log(resultData);
      this.BookingAccArray = resultData;
    })
  }

setDelete(data: any)
{
  if (confirm('Are you sure you want to DECLINE this request?')) {
    this.http.delete("http://127.0.0.1:8000/api/deleteBooking"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(data);
        alert("Request Deleted")
        this.getAllBooking();

    });
  } else {
    // Do nothing!
    console.log('Thing was not saved to the database.');
  }
}}

