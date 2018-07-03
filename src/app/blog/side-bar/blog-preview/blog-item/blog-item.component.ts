import { Component, OnInit, Input } from '@angular/core';
import { Blogs } '../../../../blogs'
import { BlogsService } from '../../../../blogs.service'

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css'],
  providers: [BlogsService]
})
export class BlogItemComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogsService: BlogsService) {
    this.blogsService.getBlogs()
      .subscribe(blogs => {
        this.blogs = blogs;
      })
  }

  ngOnInit() {
  }

}
