import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  POST_URL: string = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private _http : HttpClient) { }

  ngOnInit(): void {
    this._http.get(this.POST_URL)
    .subscribe(res => {
      console.log(res);
    })
  }

}
