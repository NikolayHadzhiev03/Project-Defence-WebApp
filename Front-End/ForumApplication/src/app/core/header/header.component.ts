import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  get isLogedin():boolean{
    return this.userService.isLogged;

  }
  get username() : string{

    return this.userService.user?.username || '';
  }
  constructor(private userService: UserService, private router:Router){}


  logout(){
   this.userService.logout().subscribe(()=>{
    this.router.navigate(["/home"])
   })

  }
}
