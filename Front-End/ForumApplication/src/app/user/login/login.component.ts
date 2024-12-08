import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EmailDirective } from '../../directives/email.directive';
import {  DOMAINS } from '../../constants';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,EmailDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  domain = DOMAINS;
  errorMessage : string | null =null;


  constructor(private userService:UserService,private router : Router){}
  login(form : NgForm){
    if(form.invalid){
      return;
    }

    const {Email,password} = form.value;
    this.userService.login(Email,password).subscribe({
      next : ()=> {
        this.router.navigate(['/home'])
      },
      error : (errorResponse)=> {
        this.errorMessage = errorResponse.error.message || 'An unexpected error occurred.'
      }
    }
    )
  }
}
