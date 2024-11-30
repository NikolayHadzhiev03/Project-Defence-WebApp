import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { NewThemeComponent } from './theme/new-theme/new-theme.component';
import { CurrentThemeComponen } from './theme/current-theme/current-theme.component';
import { MainComponent } from './main/main.component';
import { LoggedInGuard } from './guards/logged-in-guard.guard';


export const routes: Routes = [
    {path : "", redirectTo : 'home', pathMatch:"full"},
    {path: "home", component : HomeComponent},
    { path: 'new-theme', component: NewThemeComponent },
    {path: 'themes', children : [
        {path : '', component: MainComponent},
        {path : ':Themeid', component: CurrentThemeComponen}
    ]},
    {path : "login",component : LoginComponent ,canActivate : [LoggedInGuard]},
    {path : "register",component : RegisterComponent,canActivate : [LoggedInGuard]},
    {path : "profile",component : ProfileComponent},
    { path: "404", component: ErrorPageComponent },  
    { path: "**", redirectTo: '/404', pathMatch: "full" }
    
];
