import { Component, OnInit } from '@angular/core';
import { Theme } from '../../../models/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../../services/api-service.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { FormsModule, NgForm } from '@angular/forms';
import { ThemeandPostService } from '../../../services/themeand-post.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-current-theme',
  standalone: true,
  imports: [FormsModule,DatePipe],
  templateUrl: './current-theme.component.html',
  styleUrl: './current-theme.component.css'
})
export class CurrentThemeComponen implements OnInit  { 
  theme = {} as Theme;
   editingPostId: string | null = null; 

  get isLoggedin():boolean{
    return this.userService.isLogged;
  }
  get User(): User |null  {
    return this.userService.user;

  }
  constructor(
    private route : ActivatedRoute,
     private apiService : ApiServiceService,
     private userService : UserService,
     private themeService : ThemeandPostService,
    ){}
    
    

    ngOnInit(): void {
      const themeId = this.route.snapshot.params['Themeid'];
      
      this.apiService.getCurrentTheme(themeId).subscribe((theme) => {
        this.theme = theme;

      });
    }
    gettheme() {
      const themeId = this.route.snapshot.params['Themeid'];
      this.apiService.getCurrentTheme(themeId).subscribe((theme) => {
        this.theme = theme;
      });
    }

    createPost(form : NgForm){
      const id = this.route.snapshot.params['Themeid'];
      const {postText} = form.value;
      if(form.invalid){
        console.log('Invalid form');
        return
      }
      this.themeService.createPost(id, postText).subscribe((data)=>{
        this.gettheme();
        form.resetForm();
      })}
    
      onDeletePost(themeId: string, postId: string) {
        this.themeService.deletePost(themeId, postId).subscribe((data) => {
          this.gettheme();
        }, (error) => {
          console.error("Something went wrong!!!");
        });
      }
      onSubscribe(themeId: string) {
        this.themeService.subscribeToTheme(themeId).subscribe((data) => {
          this.theme.subscribers.push(this.User?._id || ""); 
        }, (error) => {
          console.error("Error subscribing:", error);
        });
      }

      onLike(postId : string){
        this.themeService.likePost(postId).subscribe((response)=>{
          this.gettheme();
        })}
        startEditing(postId: string) {
          this.editingPostId = postId;
        } 

        saveEditedPost(postId: string, form : NgForm) {
        if(form.invalid){
          return
        }
        
          const {editText} = form.value
           this.themeService.editPost(this.theme._id,postId,editText).subscribe((response)=>{
            this.gettheme();
            this.editingPostId = null;
          })}
}

