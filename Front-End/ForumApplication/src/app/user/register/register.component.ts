import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
  errorMessage : string |null = null; 

  constructor(private userService : UserService,private router :Router){}
  register(form : NgForm){
    if(form.invalid){
      console.error('Form is invalid')
      return
    }

    //!Try catch error handeling
    const {username,email,password,repassword} = form.value;
    this.userService.register(username,email,password,repassword).subscribe({
      next: ()=>{
        this.router.navigate(['/home'])
      },
      error : (errorResponse)=>{
        this.errorMessage =  errorResponse.error.message  || 'An unexpected error occurred.'
      }
    }
  )

    
  }

}
