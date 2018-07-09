import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import { Blogs } from './blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  blogsChanged = new Subject<Blogs[]>();
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
    console.log("Initialized")
    }

  getBlogs() {
    return this.http.get('http://localhost:4000/blogs');
      // .map(res => res.json());
  }

  getBlog(index: number) {
    console.log(index)
    return this.blogs[index];
  }
  // getBlogsById(id) {
  //   return this.http.get(`${this.uri}/blogs/${id}`);
  //   console.log('Blog pulled successfully')
  // }

  addBlogs(title, name, topic, imageLink, summary, blog) {
    let newBlog = {
      title: title,
      name: name,
      topic: topic,
      imageLink: imageLink,
      summary: summary,
      blog: blog
    };
    console.log(newBlog)
    this.http.post('http://localhost:4000/blogs/add', newBlog)
      .subscribe(res => console.log("Blog Submitted!"));
  }


  // updateBlogs(id, title, name, topic, imageLink, summary, blog) {
  //   const blogs = {
  //     title: title,
  //     name: name,
  //     topic: topic,
  //     imageLink: imageLink,
  //     summary: summary,
  //     blog: blog
  //   };
  //   return this.http.post(`${this.uri}/blogs/update/${id}`, blogs);
  // }
  //
  // deleteBlogs(id) {
  //   return this.http.get(`${this.uri}/blogs/delete/${id}`);
  // }
}
