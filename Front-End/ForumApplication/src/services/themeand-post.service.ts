import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeandPostService {

  constructor( private http : HttpClient) {}



  createPost(id:string , postText : string){
    const payload = { postText }
    return this.http.post<Post>(`/api/themes/${id}`,payload)

  }
  
  createTheme(themeName:string,postText : string){
    const payload = {themeName , postText};
   return this.http.post<Theme>(`/api/themes`, payload)};



    deletePost(themeId:string , postId:string){
      return this.http.delete(`/api/themes/${themeId}/posts/${postId}`);
    }

    subscribeToTheme(themeId : string){
      return this.http.put(`/api/themes/${themeId}`,{});
    }
    likePost(postId: string){
      return this.http.put(`/api/likes/${postId}`, {})
    }
    editPost(themeId:string , postId:string , postText : string){
      const payload = {postText}
      return this.http.put(`/api/themes/${themeId}/posts/${postId}`,payload);
    }
}