import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts :any[];
  
  constructor(private service:PostService) { 
   
  }

  createpost(input:HTMLInputElement)
  {
    let post={title:input.value};
    input.value=''
      this.service.createPosts(post).subscribe(
        response =>{
          post['id']=response.json().id;
          this.posts.splice(0,0,post);
        },error=>{
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }

  updatePost(post)
  {
    this.service.updatePosts(post,{isRead:true}).subscribe(response=>{
      console.log(response.json());
    },error=>{
      alert('An unexpected error occurred.');
      console.log(error);
    });
    
  }

  deletePost(post)
  {
    this.service.deletePosts(post.id).subscribe(response=>{
      let index=this.posts.indexOf(post);
      this.posts.splice(index,1);
    },(error:Response)=>{
      if (error.status==404)
      alert('This post is already deleted');
      else{
      alert('An unexpected error occurred.');
      console.log(error);
      }
    });
    
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      response => {
      this.posts=response.json();
      }, error=>{
        alert('An unexpected error occurred.');
        console.log(error);
      }
    );
  }

}
