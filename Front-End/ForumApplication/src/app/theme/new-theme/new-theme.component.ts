import { Component } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ThemeandPostService } from '../../../services/themeand-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-theme.component.html',
  styleUrl: './new-theme.component.css'
})
export class NewThemeComponent {
  constructor(
    private apiService : ApiServiceService,
    private themeService : ThemeandPostService,
    private  router : Router,

  ){}
  addTheme(form : NgForm){
    
    if(form.invalid){
      console.log(form)
      console.error('Invalid form')
      return
    }
  
    const {title , content } = form.value;
    this.themeService.createTheme(title,content).subscribe((data)=>{
      this.router.navigate(['/themes'])
    })
    
  }
}