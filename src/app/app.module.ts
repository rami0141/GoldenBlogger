import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateNewBlogComponent } from './create-new-blog/create-new-blog.component';
import { TopicsComponent } from './topics/topics.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './create-new-blog/instructions/instructions.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateNewBlogComponent,
    TopicsComponent,
    HomeComponent,
    InstructionsComponent,
    BlogViewComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
