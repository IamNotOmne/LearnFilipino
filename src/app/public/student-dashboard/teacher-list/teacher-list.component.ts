import { Component,OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule'
import { ScheduleComponent, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, View } from '@syncfusion/ej2-angular-schedule';

import {FormControl} from '@angular/forms'
import { DataService } from 'src/app/service/data.service';
import { Books } from './book.model';


@Component({
  providers: [DayService, WeekService, WorkWeekService, MonthService],
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css'],



})
export class TeacherListComponent implements OnInit{

  books:any;
  book = new Books
  @Output() studentOut = new EventEmitter();
  //creating variable to define formGroup
  studentForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Date: new FormControl('')
  })
  ngOnInit(): void {
    this.getcreatedaccountData();
    // throw new Error('Method not implemented.');

  }

getcreatedaccountData(){
    this.dataService.getBook().subscribe(res =>{
      this.books = res;
    });
}

insertBook(){
  this.dataService.insertBook(this.book).subscribe(res =>{
    this.getcreatedaccountData();

  })

}







  degree = 'BA in Filipino Language'
  registerForm: FormGroup;
  submitted = false;
  public data: object[] = [{
    Id: 2,
    Subject: 'hakdog',
    StartTime: new Date(2023, 1, 15, 10, 0),
    EndTime: new Date(2023, 1, 15, 12, 30)
}];
public selectedDate: Date = new Date(2023, 1, 1);
public eventSettings: EventSettingsModel = {
    dataSource: this.data
};



  closeResult = '';

	constructor(private modalService: NgbModal, private dataService:DataService) {}
// For teacher Omne
	open1(content1: any) {
		this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult;
			},
			(reason) => {
				this.closeResult;
			},
		);
	}

  open2(content2: any) {
		this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult;
			},
			(reason) => {
				this.closeResult;
			},
		);
	}

  opent3(content3: any) {
		this.modalService.open(content3, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult;
			},
			(reason) => {
				this.closeResult;
			},
		);
	}

  open4(content4: any) {
		this.modalService.open(content4, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult;
			},
			(reason) => {
				this.closeResult;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  public try() {
    console.log(this.book.sTime);
    console.log(this.book.eTime);
    console.log((this.book.sTime)-(this.book.eTime))
  }
}
