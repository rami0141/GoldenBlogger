import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Blog } from '../../blog.model';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent implements OnInit {
  // Pass the blog info as an EventEmitter
  @Output() blogWasSelected = new EventEmitter<Blog>();
  //This will store only an array - objects defined in our model
  blogs: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }

  onBlogSelected(blog: Blog) {
    this.blogWasSelected.emit(blog);
  }

}
