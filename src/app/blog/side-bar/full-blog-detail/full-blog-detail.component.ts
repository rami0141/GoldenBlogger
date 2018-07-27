import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs'

import { BlogsService } from '../../../blogs.service'
import { Blogs } from '../../../blogs'


@Component({
  selector: 'app-full-blog-detail',
  templateUrl: './full-blog-detail.component.html',
  styleUrls: ['./full-blog-detail.component.css'],
  // providers: [BlogsService]
})

export class FullBlogDetailComponent implements OnInit {
  blogs = new Blogs('a','b','c','d','e','f');
  id: number;
  uri = 'http://localhost:4000';

  constructor(private blogsService: BlogsService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.blogs = this.blogsService.getBlog(this.id);
          console.log(this.blogs)
        }
      );
  }

  onEditBlog() {
    this.router.navigate(['/blogEdit'], {relativeTo: this.route});
  }


  onDeleteBlog(id) {
    if(confirm("Are you sure you want to delete this blog?")) {
      this.blogsService.deleteBlogs(this.blogs._id).subscribe(res => {
        this.router.navigate(['/blogs']);
      });
    }
  }
}
