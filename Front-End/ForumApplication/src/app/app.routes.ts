import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path : "home",component : HomeComponent},
    {path : "login",component : LoginComponent},
    {path : "register",component : RegisterComponent},
    {path : "profile",component : ProfileComponent},
    {path : "**",component : ErrorPageComponent}
    
];
