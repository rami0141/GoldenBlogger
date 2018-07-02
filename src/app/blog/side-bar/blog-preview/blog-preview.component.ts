import { Component, OnInit } from '@angular/core';
// import { Blog } from '../../blog.model';
// import { BlogService } from '../../blog.service';
// Inject - database
import { BlogsService } from '../../../blogs.service'

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent implements OnInit {
  //This will store only an array - objects defined in our model
  // blogs: Blog[];

  // database
  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.blogsService.getBlogs().subscribe((blogs) => {
      console.log(blogs);
    });
    //this.blogs = this.blogsService.getBlogs();
  }

}
