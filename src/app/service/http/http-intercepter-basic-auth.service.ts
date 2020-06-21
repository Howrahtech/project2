import { Injectable } from '@angular/core';
import { HttpInterceptor ,HttpRequest,HttpHandler} from '@angular/common/http';
import { BasicauthService } from '../basicauth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService  implements HttpInterceptor {

  constructor(private basicauthService: BasicauthService) { }
  
  intercept(request: HttpRequest<any>,next: HttpHandler){
  //let username='ravi'
 // let password='dummy'
 // let basicAuthHeaderString='Basic '+window.btoa(username + ':' + password);
  
  let basicAuthHeaderString=this.basicauthService.getAuthToken();
   let basicAuthUser=this.basicauthService.getAuthUser();
  
  if(basicAuthHeaderString && basicAuthUser){
  request=request.clone({
  
  
  setHeaders: {
  Authorization :basicAuthHeaderString
  
  }
  
    })
  }
  return next.handle(request);
  
  }
  
  
}
