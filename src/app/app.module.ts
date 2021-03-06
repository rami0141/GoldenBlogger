import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopicsComponent } from './topics/topics.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { SideBarComponent } from './blog/side-bar/side-bar.component';
import { BlogPreviewComponent } from './blog/side-bar/blog-preview/blog-preview.component';
import { CreateNewBlogComponent } from './blog/create-new-blog/create-new-blog.component';
import { InstructionsComponent } from './blog/create-new-blog/instructions/instructions.component';
import { BlogItemComponent } from './blog/side-bar/blog-preview/blog-item/blog-item.component';
import { FullBlogDetailComponent } from './blog/side-bar/full-blog-detail/full-blog-detail.component';
import { FooterComponent } from './footer/footer.component';
import { BlogsService } from './blogs.service';
import { BlogEditComponent } from './blog/blog-edit/blog-edit.component';
// Routes - specific type = routes - Need to import
// Needs to be an array - because we will have multiple routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'addBlog', component: CreateNewBlogComponent },
  { path: 'blogEdit', component: BlogEditComponent },
  { path: 'blogs', component: BlogComponent, children: [
    { path: '', component: SideBarComponent },
    { path: ':id', component: FullBlogDetailComponent },
  ] },
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
    InstructionsComponent,
    BlogItemComponent,
    FullBlogDetailComponent,
    FooterComponent,
    BlogEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
