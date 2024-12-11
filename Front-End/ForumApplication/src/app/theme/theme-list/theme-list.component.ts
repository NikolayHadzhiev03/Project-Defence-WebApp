import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiServiceService } from '../../../services/api-service.service';
import { Theme } from '../../../models/theme';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-theme-list',
  standalone: true,
  imports: [RouterLink,DatePipe],
  templateUrl: './theme-list.component.html',
  styleUrl: './theme-list.component.css'
})
export class ThemeListComponent implements OnInit {
  Themes : Theme[] = [];
  constructor(private apiService : ApiServiceService){}


  ngOnInit(){
    this.apiService.getThemes().subscribe(Themes => {
      this.Themes = Themes;
      
    })
  }

}
