import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit{
  posts : Post[] = [];
    constructor(private apiService : ApiServiceService){}

  ngOnInit(): void {
    this.apiService.getPost().subscribe((posts)=>{
      this.posts = posts
      
      
    })
    
  }
}
