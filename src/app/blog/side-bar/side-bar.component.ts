import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BlogsService } from '../../blogs.service'
import { Blogs } from '../../blogs'


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
  // providers: [BlogsService]
})

export class SideBarComponent implements OnInit {
  blogs: Blogs[];

  constructor(private blogsService: BlogsService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
  }

  getSortedBlogs(Food) {
    this.blogsService.getFoodBlogs(Food);
  }

  }
