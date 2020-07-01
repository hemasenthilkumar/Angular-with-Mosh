import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { catchError  } from 'rxjs/operators';
import { AppError } from '../common/apperror';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { NotFoundError } from '../common/not-found-error';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:Http) { }
getPosts(){
  return this.http.get(this.url);
}

createPosts(post)
{
  return this.http.post(this.url,JSON.stringify(post));
}

updatePosts(post,prop)
{
  return this.http.patch(this.url+'/'+post.id,JSON.stringify(prop));
}

deletePosts(posid)
{
  return this.http.delete(this.url+'/'+posid).pipe(catchError(this.handleError));
}

handleError(error:Response)
{
  return throwError(new AppError(error));
}
}