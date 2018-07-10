import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../blogs.service'
import { Blogs } from '../../blogs'


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
  // providers: [BlogsService]
})

export class SideBarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


  }
