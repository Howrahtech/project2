import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from './../app.constant';

export const TOKEN="token"
export const AUTH_USER="auth"

 export class AuthenticationBean{
  
    constructor(private msg:String ) { }
  
  
  
  
  }
@Injectable({
  providedIn: 'root'
})
export class BasicauthService {

  constructor(private http:HttpClient ) { }
  
  
///
  executeJWTBasicAuth(username,password){
  
  
  return this.http.post<any>(`${API_URL}/authenticate`,{
  username,
  password
  }).pipe(
  
  map(
  data=>{
  
  sessionStorage.setItem(AUTH_USER, username);
  sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
  return data;
  }
  )
  ) ;
 // console.log("hello world April 28")
  }
  
  ////////////
  executeAuth(username,password){
  
  let basicAuthHeaderString='Basic '+window.btoa(username + ':' + password);
  let headers=new HttpHeaders({
  
      Authorization: basicAuthHeaderString
      })
  return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers}).pipe(
  
  map(
  data=>{
  
  sessionStorage.setItem(AUTH_USER, username);
  sessionStorage.setItem(TOKEN, basicAuthHeaderString);
  return data;
  }
  )
  ) ;
 // console.log("hello world April 28")
  }
  
 
  
   getAuthUser(){
  return sessionStorage.getItem(AUTH_USER);
  
  }
  
  getAuthToken(){
  if(this.getAuthUser()){
  return sessionStorage.getItem(TOKEN);
        }
  }
  ////////////////////
  
  isUserLoggedIn(){
  var user = sessionStorage.getItem(AUTH_USER);
  return !(user===null)
  }
  
  logout(){
  sessionStorage.removeItem(AUTH_USER);
  sessionStorage.removeItem(TOKEN);
  }
  
}
