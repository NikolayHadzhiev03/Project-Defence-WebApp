import { Component, OnInit } from '@angular/core';
import { Theme } from '../../../models/theme';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../../services/api-service.service';


@Component({
  selector: 'app-current-theme',
  standalone: true,
  imports: [],
  templateUrl: './current-theme.component.html',
  styleUrl: './current-theme.component.css'
})
export class CurrentThemeComponen implements OnInit { 
  theme = {} as Theme
  constructor(private route : ActivatedRoute, private apiService : ApiServiceService){}
 
  ngOnInit(): void {
    const id = this.route.snapshot.params['Themeid'];

    this.apiService.getCurrentTheme(id).subscribe((theme)=>{ 
      this.theme = theme
      console.log((theme));
      
    })
  }

}

