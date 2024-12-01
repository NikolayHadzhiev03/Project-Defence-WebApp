import { Component, OnInit } from '@angular/core';
import { Theme } from '../../../models/theme';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiServiceService } from '../../../services/api-service.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { FormsModule, NgForm } from '@angular/forms';
import { ThemeandPostService } from '../../../services/themeand-post.service';


@Component({
  selector: 'app-current-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './current-theme.component.html',
  styleUrl: './current-theme.component.css'
})
export class CurrentThemeComponen implements OnInit  { 
  theme = {} as Theme
  get isLoggedin():boolean{
    return this.userService.isLogged;
  }
  get User(): User |null  {
    return this.userService.user;

  }
  constructor(
    private route : ActivatedRoute,
    private router : Router,
     private apiService : ApiServiceService,
     private userService : UserService,
     private themeService : ThemeandPostService
    ){}
 
  ngOnInit(): void {
    const id = this.route.snapshot.params['Themeid'];
    this.apiService.getCurrentTheme(id).subscribe((theme)=>{ 
      this.theme = theme;

    })
  } 
    createPost(form : NgForm){
      const id = this.route.snapshot.params['Themeid'];
      const {postText} = form.value;
      this.themeService.createPost(id, postText).subscribe((data)=>{
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/themes/${this.theme._id}`]);
        });
        
      })
    }

    onDeletePost(themeId :string  , postId: string ){
      this.themeService.deletePost(themeId,postId).subscribe((data )=>{
        console.log('Sucsessful');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/themes/${this.theme._id}`]);
        });
      },(error)=>{console.error("Someting whent wrong!!!")})}
 
      onSubscribe(themeId: string) {

        this.themeService.subscribeToTheme(themeId).subscribe((data) => {
          this.theme.subscribers.push(this.User?._id || ""); 
        }, (error) => {
          console.error("Error subscribing:", error);
        });
      }
      onLike(postId : string){
        this.themeService.likePost(postId).subscribe((response)=>{
          console.log(response);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([`/themes/${this.theme._id}`]);
          });
        })


      }
      

}

