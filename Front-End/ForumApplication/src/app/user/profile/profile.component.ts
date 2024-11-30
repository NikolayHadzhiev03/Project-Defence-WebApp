import { Component } from '@angular/core';
import {FormsModule, NgForm } from '@angular/forms';
import { EmailDirective } from '../../directives/email.directive';
import { DOMAINS } from '../../constants';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,EmailDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isShowMode : boolean = true;
domain = DOMAINS;
  toggleMode () {
    this.isShowMode = !this.isShowMode;
  }
    

  saveProfileFn(form : NgForm){
    if(form.invalid){
      console.error('Invalid form')
      return;
    }


    console.log(form.value);
    

  }
}
