import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BlogsService } from '../../../blogs.service'
import { Blogs } from '../../../blogs'


@Component({
  selector: 'app-full-blog-detail',
  templateUrl: './full-blog-detail.component.html',
  styleUrls: ['./full-blog-detail.component.css'],
  // providers: [BlogsService]
})

export class FullBlogDetailComponent implements OnInit {
  blogs: Blogs;
  id: number;

  constructor(private blogsService: BlogsService,
  private route: ActivatedRoute,
  private router: Router) { }


  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.blogs = this.blogsService.getBlog(this.id);
        }
      );
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
