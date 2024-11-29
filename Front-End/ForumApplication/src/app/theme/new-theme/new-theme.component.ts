import { Component } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-theme.component.html',
  styleUrl: './new-theme.component.css'
})
export class NewThemeComponent {
  constructor(private apiService : ApiServiceService){}
  addTheme(form : NgForm){
    
    if(form.invalid){
      console.log(form)
      console.error('Invalid form')
      return
    }
    

    console.log(form.value);
    const {title , content } = form.value;
    console.log(title);
    


    // this.apiService.createTheme(themeName,postText).subscribe((data)=>{
    //   console.log(data);
      
    // })
  }
}