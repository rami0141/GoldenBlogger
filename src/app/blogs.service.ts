import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.http.get('http://localhost:4000/blogs');
      .map(res => res.json());
  }

  getBlogsById(id) {
    return this.http.get(`${this.uri}/blogs/${id}`);
  }

  addBlogs(newBlog) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/blogs/add', JSON.stringify(newBlog), {headers: headers});
      .map(res => res.json());
      console.log(newBlog);
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
