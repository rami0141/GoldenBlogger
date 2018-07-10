import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
// import { Observable } from 'rxjs/Observable';
import { Blogs } from '../../../blogs';
import { BlogsService } from '../../../blogs.service';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent implements OnInit {
blogs: Blogs[];
subscription: Subscription;

constructor(private blogsService: BlogsService,
  private router: Router,
  private route: ActivatedRoute) { }

ngOnInit() {
  this.blogsService.getBlogs()
    .subscribe((data: Blogs[]) => {
      this.blogs = data;
      this.blogsService.setBlogs(data);
    });
  }

}
