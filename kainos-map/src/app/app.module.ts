import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { FormsModule } from '@angular/forms';
import { TitleDirective } from './title.directive';
import { DescriptionDirective } from './description.directive';
import { InfoDirective } from './info.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    TitleDirective,
    DescriptionDirective,
    InfoDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
