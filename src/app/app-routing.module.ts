import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { TeacherListComponent } from './public/student-dashboard/teacher-list/teacher-list.component';
import { LoginComponent } from './public/login/login.component';
import { LoginAdminComponent } from './public/login-admin/login-admin.component';
import { LoginTeacherComponent } from './public/login-teacher/login-teacher.component';

import { CreateAccountComponent } from './public/create-account/create-account.component';
import { AdminDashboardComponent } from './public/admin-dashboard/admin-dashboard.component';
import { TeacherDashboardComponent } from './public/teacher-dashboard/teacher-dashboard.component';
import { AdminUserComponent } from './public/admin-dashboard/admin-user/admin-user.component';
import { TeacherUserComponent } from './public/teacher-dashboard/teacher-user/teacher-user.component';
import { StudentDashboardComponent } from './public/student-dashboard/student-dashboard.component';
import { StudentUserComponent } from './public/student-dashboard/student-user/student-user.component';
import { AdminEditComponent } from './public/admin-edit/admin-edit.component';
import { BookEditComponent } from './public/book-edit/book-edit.component';



const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path:'', component: HomeComponent},
      {path:'login', component:LoginComponent},
      {path: 'login-teacher', component:LoginTeacherComponent},
      {path: 'login-admin', component: LoginAdminComponent},
      {path: 'student-dashboard', component: StudentDashboardComponent},
      // {path:'teacher-list',component:TeacherListComponent},


    ]
  },

  {path:'teacher-list',component:TeacherListComponent},

  {path:'create-account',component:CreateAccountComponent},
  {path: 'admin-dashboard', component:AdminDashboardComponent,
    children: [
      {path: 'admin-user', component:AdminUserComponent},


    ]
  },
  {path: 'teacher-dashboard', component: TeacherDashboardComponent,
    children: [
      {path: 'teacher-user', component: TeacherUserComponent}
    ]
  },
  {path: 'student-dashboard', component: StudentDashboardComponent,
    children: [
      // {path:'teacher-list',component:TeacherListComponent},
      {path: 'student-user', component: StudentUserComponent},

    ]
  },
  {path: 'admin-edit/:id', component:AdminEditComponent},
  {path: 'book-edit/:id', component:BookEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
