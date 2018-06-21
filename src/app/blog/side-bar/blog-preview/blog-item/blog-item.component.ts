import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import{ Blog } from '../../../blog.model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  // use the @Input() decorator to get the blog from outside or any data
  @Input() blog: Blog;
  @Output() blogSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.blogSelected.emit()
  }

}
