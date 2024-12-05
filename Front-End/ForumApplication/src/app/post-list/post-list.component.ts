import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Post } from '../../models/post';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { RelativeTimePipe } from '../pipes/relative-time.pipe';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterLink,RelativeTimePipe],
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
