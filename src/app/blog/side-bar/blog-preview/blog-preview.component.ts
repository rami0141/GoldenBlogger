import { Component, OnInit } from '@angular/core';
// Inject - database
import { BlogsService } from '../../../blogs.service'

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent implements OnInit {

  constructor(private blogsService: BlogsService) { }

}
