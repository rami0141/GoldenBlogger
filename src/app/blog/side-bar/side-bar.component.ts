import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  providers: [BlogService]
})
export class SideBarComponent implements OnInit {
  selectedBlog: Blog;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.blogSelected
      .subscribe(
        (blog: Blog) => {
          this.selectedBlog = blog;
        }
      );

  }


}
