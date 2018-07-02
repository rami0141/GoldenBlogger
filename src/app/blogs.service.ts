import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.http.get(`${this.uri}/blogs`);
  }

  getBlogsById(id) {
    return this.http.get(`${this.uri}/blogs/${id}`);
  }

  addBlogs(title, name, topic, imageLink, summary, blog) {
    const blogs = {
      title: title,
      name: name,
      topic: topic,
      imageLink: imageLink,
      summary: summary,
      blog: blog
    };
    return this.http.post(`${this.uri}/blogs/add`, blogs);
  }

  updateBlogs(id, title, name, topic, imageLink, summary, blog) {
    const blogs = {
      title: title,
      name: name,
      topic: topic,
      imageLink: imageLink,
      summary: summary,
      blog: blog
    };
    return this.http.post(`${this.uri}/blogs/update/${id}`, blogs);
  }

  deleteBlogs(id) {
    return this.http.get(`${this.uri}/blogs/delete/${id}`);
  }
}
