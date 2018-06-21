import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  selectedBlog: Blog;

  constructor() { }

  ngOnInit() {
  }


}
