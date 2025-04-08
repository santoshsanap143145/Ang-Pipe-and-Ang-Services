import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
@ViewChild('postForm') postForm !: NgForm
  constructor(private _postservice: PostService) { }

  ngOnInit(): void {
  }
  addOnPostClick(){
    if(this.postForm.valid){
      let newPost = this.postForm.value;
      this._postservice.createPost(newPost);
      this.postForm.reset();
    }
  }
}
