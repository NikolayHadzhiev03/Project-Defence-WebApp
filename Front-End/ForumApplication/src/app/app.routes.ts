import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { NewThemeComponent } from './theme/new-theme/new-theme.component';
import { ThemeListComponent } from './theme/theme-list/theme-list.component';
import { CurrentThemeComponen } from './theme/current-theme/current-theme.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path : "", component : MainComponent , children : [
        {path : "home", component : HomeComponent},
    ]},
    {path : "login",component : LoginComponent},
    { path: 'new-theme', component: NewThemeComponent },
    {path: 'themes', children : [
        {path : '', component: ThemeListComponent},
        {path : ':Themeid', component: CurrentThemeComponen}
    ]},
    {path : "register",component : RegisterComponent},
    {path : "profile",component : ProfileComponent},
    {path : "**",component : ErrorPageComponent}
    
];
