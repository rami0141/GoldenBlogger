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
  uri = 'http://cristina-zhang.com/mongo';
  blogChanged = new Subject<Blogs[]>();

  private blogs: Blogs[] = []

  constructor(private http: HttpClient) {
    console.log("Initialized")
    }

  // Gets All Blogs
  getBlogs() {
    return this.http.get(`${this.uri}/blogs`);
      // .map(res => res.json());
  }

  setBlogs(blogs: Blogs[]) {
      this.blogs = blogs;
      this.blogChanged.next(this.blogs.slice());
    }

  // Gets a blog by index
  getBlog(index:number) {
    return this.blogs[index];
  }

  // Filter Array By Topic - SideBarComponent
  getSortedBlogs(topic: string) {
    console.log(topic);
    this.blogs.forEach(function(value) {
        if (topic === value.topic) {
          console.log(value);
        }
      });
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
    this.http.post(`${this.uri}4000/blogs/add`, newBlog)
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
  updateBlogs(index: number, newBlogs: Blogs) {
  console.log(index);
    this.blogs[index] = newBlogs;
    this.blogChanged.next(this.blogs.slice());
  }

  deleteBlogs(id: string) {
    return this.http.delete(`${this.uri}/blogs/delete/${id}`);
  }
}
