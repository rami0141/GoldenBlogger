import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
// import { AppRoutingModule } from

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopicsComponent } from './topics/topics.component';
import { HomeComponent } from './home/home.component';

import { BlogComponent } from './blog/blog.component';
import { SideBarComponent } from './blog/side-bar/side-bar.component';
import { BlogPreviewComponent } from './blog/blog-preview/blog-preview.component';
import { CreateNewBlogComponent } from './blog/create-new-blog/create-new-blog.component';
import { ViewCreateNewComponent } from './blog/create-new-blog/view-create-new/view-create-new.component';
import { InstructionsComponent } from './blog/create-new-blog/instructions/instructions.component';
import { FullBlogViewComponent } from './blog/side-bar/full-blog-view/full-blog-view.component';

// Routes - specific type = routes - Need to import
// Needs to be an array - because we will have multiple routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'addBlog', component: CreateNewBlogComponent },
  { path: 'view', component: SideBarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopicsComponent,
    HomeComponent,
    BlogComponent,
    SideBarComponent,
    BlogPreviewComponent,
    CreateNewBlogComponent,
    ViewCreateNewComponent,
    InstructionsComponent,
    FullBlogViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
