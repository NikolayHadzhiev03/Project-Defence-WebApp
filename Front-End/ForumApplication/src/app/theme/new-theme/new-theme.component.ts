import { Component } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';

@Component({
  selector: 'app-new-theme',
  standalone: true,
  imports: [],
  templateUrl: './new-theme.component.html',
  styleUrl: './new-theme.component.css'
})
export class NewThemeComponent {
  constructor(private apiService : ApiServiceService){}
  addTheme(e:Event ,themeName:string ,postText:string){
    e.preventDefault();
    console.log( {themeName,postText} );

    // this.apiService.createTheme(themeName,postText).subscribe((data)=>{
    //   console.log(data);
      
    // })
  }
}