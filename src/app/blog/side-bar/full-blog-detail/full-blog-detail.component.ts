import { Component, OnInit, Input } from '@angular/core';

import { Blog } from '../../blog.model';

@Component({
  selector: 'app-full-blog-detail',
  templateUrl: './full-blog-detail.component.html',
  styleUrls: ['./full-blog-detail.component.css']
})
export class FullBlogDetailComponent implements OnInit {
  //get data from outside
  @Input() blog: Blog;
  constructor() { }

  ngOnInit() {
  }

}
