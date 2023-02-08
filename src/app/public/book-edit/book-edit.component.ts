import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import {BookEdit} from 'src/app/book-edit'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.id=this.url.snapshot.params['id'];
    this.getData();
  }
  book = new BookEdit();
  data:any;
  id:any
constructor (private dataService:DataService, private router: Router, private http:HttpClient, private url:ActivatedRoute){
}
acceptTeacher(){
  this.dataService.acceptedbooking(this.book).subscribe(res =>{
    console.log(res);
    this.data=res;
      this.book=this.data;
      this.http.delete("http://127.0.0.1:8000/api/deleteBooking"+ "/"+ this.id).subscribe((resultData: any)=>
      {
        this.router.navigateByUrl('/teacher-dashboard');

      });
    // this.route.navigate(['/admin-dashboard']);
  })
}
getData(){
  this.dataService.getOneBook(this.id).subscribe(
    res=>{
      console.log(res);
      this.data=res;
      this.book=this.data;
    }
  )
}
}

