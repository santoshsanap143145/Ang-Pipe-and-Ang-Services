import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts.service';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-post-two',
  templateUrl: './post-two.component.html',
  styleUrls: ['./post-two.component.scss'],
})
export class PostTwoComponent implements OnInit {
  // PostService: PostService = new PostService();
  postsData!: Array<Ipost>;
  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this.postsData = this._postService.fetchAllPosts()
  }
}
