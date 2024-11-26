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
    const { apiUrl } = environments;
  return this.http.get<Post[]>(`${apiUrl}/posts`);
  };

    getThemes(){
      const {apiUrl} = environments;
      return this.http.get<Theme[]>(`${apiUrl}/themes`);
    }
    getCurrentTheme(id :string){
      const {apiUrl} = environments;
      return this.http.get<Theme>(`${apiUrl}/themes/${id}`)
    }

    // createTheme(themeName:string,postText : string){
    //   const {apiUrl}= environments
    //   const payload = {themeName , postText};
    //   return this.http.post<Theme>(`${apiUrl}/themes`, payload)

    // }
}
