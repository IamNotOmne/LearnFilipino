import { Component, OnInit } from '@angular/core';
import {Apply} from './apply.model';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  apply = new Apply()
  target:any='';
  constructor(
    private dataService:DataService,
    private route: Router
  ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  applyTeacher(){

    if(this.apply.firstname == undefined || this.apply.lastname == undefined
      || this.apply.email == undefined || this.apply.city == undefined || this.apply.degree == undefined
      || this.apply.school_graduated == undefined || this.apply.description == undefined || this.apply.qrCode == undefined
      || this.apply.language == undefined)
    {
      this.target = '<div class="alert alert-danger" > Please input valid details!</div>';
    }
    this.dataService.addTeacher(this.apply).subscribe( (response: any) =>{
      this.apply.firstname='';
      this.apply.lastname='';
      this.apply.email='';
      this.apply.city='';
      this.apply.degree='';
      this.apply.school_graduated='';
      this.apply.qrCode;
      this.apply.language;
      this.apply.description='';
      console.log(response);

      if(response.code ==1)
      {
        this.target = '<div class="alert alert-success" > The form has been submitted. Please wait for the confirmation email.'+'</div>';

        

      }
      // else if(response.code ==2)
      // {
      //   this.target = '<div class="alert alert-danger" > Error! '+response.message+'</div>';
      // }
    });
  }

}
