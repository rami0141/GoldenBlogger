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
  // private blogger: Blogger[] = [
    // new Blogger(
    //   'The Bone',
    //   'Mushu',
    //   'Pets',
    //   'https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?cs=srgb&dl=animal-cute-animals-dog-59523.jpg&fm=jpg'
    //   'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
    //   'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    // ),
  // ];


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
