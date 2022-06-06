import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PiechartComponent } from './piechart/piechart.component';
import { LoginComponent } from './login/login.component';
import { LearnerDashboardComponent } from './learner-dashboard/learner-dashboard.component';
import { AssesmentsComponent } from './assesments/assesments.component';
import { CoursesComponent } from './courses/courses.component';
import { MaterialComponent } from './material/material.component';
import { LearnerComponent } from './learner/learner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    PiechartComponent,
    LoginComponent,
    LearnerDashboardComponent,
    AssesmentsComponent,
    CoursesComponent,
    MaterialComponent,
    LearnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    NgbModule, 
    FormsModule, 
    ReactiveFormsModule,
    Ng2GoogleChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
