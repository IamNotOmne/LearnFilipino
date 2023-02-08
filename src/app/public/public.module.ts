import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { TeacherListComponent } from './student-dashboard/teacher-list/teacher-list.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
// import { CreateAccountComponent } from "./create-account/CreateAccountComponent";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';
import { AdminUserComponent } from './admin-dashboard/admin-user/admin-user.component';
import { TeacherUserComponent } from './teacher-dashboard/teacher-user/teacher-user.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentUserComponent } from './student-dashboard/student-user/student-user.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { BookEditComponent } from './book-edit/book-edit.component';






@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    TeacherListComponent,
    // CreateAccountComponent,
    AdminDashboardComponent,
    TeacherDashboardComponent,
    LoginAdminComponent,
    LoginTeacherComponent,
    AdminUserComponent,
    TeacherUserComponent,
    StudentDashboardComponent,
    StudentUserComponent,
    AdminEditComponent,
    TeacherListComponent,
    BookEditComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ScheduleModule,
    // NgbNavModule,
    // NgbModule


  ],
  providers: [DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService],

})
export class PublicModule { }
