import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { BlogsService } from '../../blogs.service';
import { Blogs } from '../../blogs';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

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
  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.initForm();
  }

  addBlogs(event) {
    event.preventDefault();
    var newBlog = {
      title: this.title,
      name: this.name,
      topic: this.topic,
      imageLink: this.imageLink,
      summary: this.summary,
      blog: this.blog
    }
    this.blogsService.addBlogs(newBlog)
      console.log(newBlog);
      .subscribe(blog => {
        this.blog.push(blogs)
      });
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

  private initForm() {
    let blogName = '';
    let authorName = '';
    let blogTopic = '';
    let blogImageLink = '';
    let blogSummary = '';
    let blog = '';

    this.blogForm = new FormGroup({
      'title': new FormControl(blogName, Validators.required),
      'name': new FormControl(authorName, Validators.required),
      'topic': new FormControl(blogTopic, Validators.required),
      'imageLink': new FormControl(blogImageLink, Validators.required),
      'summary': new FormControl(blogSummary, Validators.required),
      'blog': new FormControl(blog, Validators.required),
    });
  }
}
