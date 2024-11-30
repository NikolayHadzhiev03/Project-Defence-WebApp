import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../environments/enviroments';
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

    // createTheme(themeName:string,postText : string){
    //   const {apiUrl}= environments
    //   const payload = {themeName , postText};
    //   return this.http.post<Theme>(`${apiUrl}/themes`, payload)

    // }
}
