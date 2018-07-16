import { Component, OnInit, Input } from '@angular/core';
import { Blogs } from '../../../../blogs'
import { BlogsService } from '../../../../blogs.service'
// import { Router, ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})

export class BlogItemComponent implements OnInit {
  @Input() blogs: Blogs;
  @Input() index: number;

  constructor() { }

  ngOnInit() {

  }

}
