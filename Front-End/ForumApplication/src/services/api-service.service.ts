import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from '../models/theme';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) {}
  getPost(){
  return this.http.get<Post[]>(`/api/posts`);
  };

    getThemes(){
      return this.http.get<Theme[]>(`/api/themes`);
    }
    getCurrentTheme(id :string){
      return this.http.get<Theme>(`/api/themes/${id}`)
    }  
}
