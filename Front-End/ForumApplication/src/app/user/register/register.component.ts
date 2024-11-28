import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { from } from 'rxjs';
import { EmailDirective } from '../../directives/email.directive';
import { DOMAINS } from '../../constants';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,FormsModule,EmailDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  domain = DOMAINS;
  register(form : NgForm){
    if(form.invalid){
      console.error('Form is invalid')
      
    }
  }

}
