import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateNewBlogComponent } from './create-new-blog/create-new-blog.component';
import { TopicsComponent } from './topics/topics.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './create-new-blog/instructions/instructions.component';
import { BlogViewComponent } from './blog-view-sidebar/blog-view/blog-view.component';
import { BlogViewSidebarComponent } from './blog-view-sidebar/blog-view-sidebar.component';
import { Routes, RouterModule } from "@angular/router";

// Routes - specific type = routes - Need to import
// Needs to be an array - because we will have multiple routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'addBlog', component: CreateNewBlogComponent },
  { path: 'view', component: BlogViewSidebarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateNewBlogComponent,
    TopicsComponent,
    HomeComponent,
    InstructionsComponent,
    BlogViewComponent,
    BlogViewSidebarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
