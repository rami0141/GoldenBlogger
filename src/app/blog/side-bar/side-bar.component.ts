import { Component, OnInit } from '@angular/core';
import { Blogs } from '../../blogs';
import { BlogsService } from '../../blogs.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
  // providers: [BlogsService]
})

export class SideBarComponent implements OnInit {
  // selectedBlog: Blogs;
  //
  // constructor(private blogsService: BlogsService) { }
  //
  // ngOnInit() {
  //   this.blogsService.blogsSelected
  //     .subscribe(
  //       (blogs: Blogs) => {
  //         this.selectedBlog = blogs;
  //       }
  //     );

  }


}
