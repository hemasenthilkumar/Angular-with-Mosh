import {Component, Input, OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  islike: boolean;
  private url='http://jsonplaceholder.com/posts';
  constructor() {}

  ngOnInit(): void {

  }

  onClick()
  {
      this.islike = !this.islike;
  }

}
