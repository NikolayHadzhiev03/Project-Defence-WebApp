import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { from } from 'rxjs';
import { EmailDirective } from '../../directives/email.directive';
import { DOMAINS } from '../../constants';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,FormsModule,EmailDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  domain = DOMAINS;

  constructor(private userService : UserService,private router :Router){}
  register(form : NgForm){
    //TODO: Try/Catch the  server response 
    if(form.invalid){
      console.error('Form is invalid')
      return
    }
    
    const {username,email,password,repassword} = form.value;
    this.userService.register(username,email,password,repassword).subscribe(()=>{
      this.router.navigate(['/home'])
    })

    
  }

}
