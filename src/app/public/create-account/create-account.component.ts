import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateAccounts } from 'src/app/create-accounts';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit{
  titleStudent = 'Sign Up for New Students';
  createaccounts:any;
  createaccount = new CreateAccounts();

  constructor(private dataService:DataService, private route:Router){

  }

  ngOnInit(): void {
    this.getcreatedaccountData();
    // throw new Error('Method not implemented.');

  }

getcreatedaccountData(){
    this.dataService.getData().subscribe(res =>{
      this.createaccounts = res;
    });
}

inserData(){

  this.dataService.insertData(this.createaccount).subscribe(res =>{
    this.getcreatedaccountData();

    this.route.navigate(['/login']);
  })

  }
}
