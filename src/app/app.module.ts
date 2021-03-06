import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PasswordFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
