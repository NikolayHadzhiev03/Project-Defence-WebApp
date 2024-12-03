import { Component } from '@angular/core';
import {FormsModule, NgForm } from '@angular/forms';
import { EmailDirective } from '../../directives/email.directive';
import { DOMAINS } from '../../constants';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

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

constructor(
  private userService : UserService,
  private router : Router
){}
  toggleMode () {
    this.isShowMode = !this.isShowMode;
  }
  get User(): User | null  {
    return this.userService.user
  }

  saveProfileFn(form : NgForm){
    if(form.invalid){
      console.error('Invalid form')
      return;
    }
    const {username , email} = form.value;
    this.userService.editProfile(username,email).subscribe((response )=>{
      this.userService.user = response; 
      this.isShowMode = true;
      
    })
  }
}
