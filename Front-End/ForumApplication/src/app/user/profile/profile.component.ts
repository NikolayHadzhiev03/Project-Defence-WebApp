import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms';
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
    

  saveProfileFn(){

  }
}
