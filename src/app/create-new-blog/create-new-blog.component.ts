import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-blog',
  templateUrl: './create-new-blog.component.html',
  styleUrls: ['./create-new-blog.component.css']
})
export class CreateNewBlogComponent implements OnInit {
  blogName = '';
  authorName = '';
  summary = '';
  blog = '';

  constructor() { }

  ngOnInit() {
  }

  onUpdateTitleName(event: any) {
    this.blogName = event.target.value;
  }
  onUpdateAuthorName(event: any) {
    this.authorName = event.target.value;
  }

  onUpdateSummary(event: any){
    this.summary = event.target.value;
  }

  onUpdateBlog(event: any) {
    this.blog = event.target.value;
  }

}
