import { Component, OnInit, Input } from '@angular/core';
import{ Blog } from '../../../blog.model';
import { BlogsService } from '../../../../blogs.service'

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  // use the @Input() decorator to get the blog from outside or any data
  @Input() blog: Blog;


  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.blogsService.getBlogs().subscribe((blogs) => {
      console.log(blogs);
    });
    //this.blogs = this.blogsService.getBlogs();
  }

  // onSelected() {
  //   // use blogselected emmiter emitter and call emit and emit the blog of this blog item component
  //   this.BlogService.blogSelected.emit(this.blog);
  // }

}
