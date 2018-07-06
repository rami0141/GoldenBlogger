import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
    console.log("Initialized")
    }

  getBlogs() {
    return this.http.get('http://localhost:4000/blogs');
      .map(res => res.json());
  }

  // getBlogsById(id) {
  //   return this.http.get(`${this.uri}/blogs/${id}`);
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
