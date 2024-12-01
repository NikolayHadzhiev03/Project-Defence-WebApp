import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { BehaviorSubject, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class UserService{
    private user$$ = new BehaviorSubject< User | null >(null)
    private user$ = this.user$$.asObservable();

    user : User | null = null;
    constructor(private http:HttpClient){
        this.user$.subscribe((user)=>{
        this.user = user;
    })
    }

    get isLogged(): boolean{
        return !!this.user
    }

    login(email : string, password : string){
        const payload = {email,password}
        return this.http.post<User>('/api/login',payload).pipe(tap((user) =>this.user$$.next(user)));
    }

    register(username :string , email : string, password : string, repassword:string){
        const payload = {username,email,password,repassword}
       return this.http.post<User>('/api/register',payload).pipe(tap((user) =>this.user$$.next(user)));
    }

    getProfile (){
        return this.http.get<User>('/api/users/profile').pipe(tap((user) =>this.user$$.next(user)));
    }
    logout(){
        return this.http.post<User>('/api/logout', {}).pipe(tap((user) =>this.user$$.next(null)));
    }
    editProfile(username : string, email : string ){
       const payload = { username,email}
        return this.http.put<User>(`/api/users/profile`,payload)
    }

}