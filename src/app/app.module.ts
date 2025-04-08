import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { SummaryWordsPipe } from './shared/pipes/summary-words.pipe';
import { PlayerFilterPipe } from './shared/pipes/playerFilter.pipe';
import { FormsModule } from '@angular/forms';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import{HttpClientModule} from '@angular/common/http';
import { PostOneComponent } from './shared/components/post-one/post-one.component';
import { PostTwoComponent } from './shared/components/post-two/post-two.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentFormComponent } from './shared/components/student-form/student-form.component';
import { StudentTableComponent } from './shared/components/student-table/student-table.component';


import { ProductsModule } from './shared/products/products.module';
import { MaterialModule } from './shared/material/material.module';
import { PassengerModule } from './shared/passenger/passenger.module';




@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    SummaryWordsPipe,
    PlayerFilterPipe,
    PostDashboardComponent,
    PostOneComponent,
    PostTwoComponent,
    PostFormComponent,
    TodoFormComponent,
    TodoListComponent,
    StudentFormComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProductsModule,
    PassengerModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
