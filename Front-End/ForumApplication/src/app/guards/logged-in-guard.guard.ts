import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    
    return this.userService.getProfile().pipe(
      map((user) => {
        if (user) {
          this.router.navigate(['/404']);
          return false; 
        }
        return true;
      }),
      //!This catch is becouse the server is retturning status/code 401
      //!so i need to catch it ,becouse it wont let  non logged in users to  go to register page 
      catchError((error) => {
        if (error.status === 401) {
          return of(true);
        }
        this.router.navigate(['/404']); 
        return of(false);
      })
    );
  }
}
