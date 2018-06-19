import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  // addBlog(blogArray: Blog) {
  //   this.blog.push(blog);
  // }

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

  onSubmit() {
    console.log(this.blogForm.value);
  //   const newBlog = new Blogger(
  //     this.blogForm.value['title'],
  //     this.blogForm.value['name'],
  //     this.blogForm.value['topic'],
  //     this.blogForm.value['imageLink'],
  //     this.blogForm.value['summary'],
  //     this.blogForm.value['blog']);
  // }
}
}
