import { createComponent, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';

import {RouterModule, Routes} from '@angular/router';
//gibalhin ang create-account?
import { CreateAccountComponent } from './public/create-account/create-account.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// syncfusion
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule';


const appRoutes: Routes = [
    {path: '', component:CreateAccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ScheduleModule, RecurrenceEditorModule


  ],
  providers: [DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
