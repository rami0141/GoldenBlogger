import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { BlogsService } from '../../blogs.service';
import { Blogs } from '../../blogs';

@Component({
  selector: 'app-create-new-blog',
  templateUrl: './create-new-blog.component.html',
  styleUrls: ['./create-new-blog.component.css']
})

export class CreateNewBlogComponent implements OnInit {
  blogName = '';
  authorName = '';
  summary = '';
  blog = '';
  blogForm: FormGroup;
  imageLink = '';
  // topic = '';
  constructor(private blogsService: BlogsService, private fb: FormBuilder) {
    this.createForm();
 }

  ngOnInit() {
  }

  reset() {
    this.blogForm.reset();
    console.log("form has been cleared")
  }

  createForm() {
    this.blogForm = this.fb.group({
      title: ['', Validators.required ],
      name: ['', Validators.required ],
      topic: ['', Validators.required ],
      imageLink: ['', Validators.required ],
      summary: ['', Validators.required ],
      blog: ['', Validators.required ]
    });
  }

  addBlogs(title, name, topic, imageLink, summary, blog) {
    this.blogsService.addBlogs(title, name, topic, imageLink, summary, blog);
    this.blogForm.reset();
  }


  onUpdateTitleName(event: any) {
    this.blogName = event.target.value;
  }
  onUpdateAuthorName(event: any) {
    this.authorName = event.target.value;
  }

  onUpdateLink(event: any) {
    this.imageLink = event.target.value;
  }

  onUpdateSummary(event: any){
    this.summary = event.target.value;
  }

  onUpdateBlog(event: any) {
    this.blog = event.target.value;
  }

}
