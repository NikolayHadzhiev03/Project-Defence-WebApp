import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmailDirective } from '../../directives/email.directive';
import {  DOMAINS } from '../../constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,EmailDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  domain = DOMAINS;
  login(form : NgForm){
      //TODO: Try/Catch the  server response 
    if(form.invalid){
      return;
    }

    console.log(form.value);

  }

}
