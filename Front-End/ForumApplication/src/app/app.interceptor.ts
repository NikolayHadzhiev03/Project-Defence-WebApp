import { HttpInterceptorFn } from '@angular/common/http';
import { environments } from '../environments/enviroments';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
 const API = '/api';
 const {apiUrl} = environments;
 if(req.url.startsWith(API)){
  req = req.clone({
    url : req.url.replace(API,apiUrl),
    withCredentials : true
  })
  

 }

  
  return next(req);
};
