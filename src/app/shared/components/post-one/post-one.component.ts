import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts.service';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-post-one',
  templateUrl: './post-one.component.html',
  styleUrls: ['./post-one.component.scss']
})
export class PostOneComponent implements OnInit {
// PostService: PostService = new PostService()
postsData!: Array<Ipost>
  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this.postsData = this._postService.fetchAllPosts()
  }

}
