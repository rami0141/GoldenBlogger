import { Component, OnInit, Input } from '@angular/core';
// import { BlogsService } from '../../../blogs.service'
// import { Blogs } from '../../../blogs'


@Component({
  selector: 'app-full-blog-detail',
  templateUrl: './full-blog-detail.component.html',
  styleUrls: ['./full-blog-detail.component.css'],
  // providers: [BlogsService]
})

export class FullBlogDetailComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  // blogs: Blog[];
  //
  // constructor(private blogsService: BlogsService) {
  //   this.blogsService.getBlogs()
  //     .subscribe(blogs => {
  //       this.blogs = blogs;
  //     })
  // }

}
