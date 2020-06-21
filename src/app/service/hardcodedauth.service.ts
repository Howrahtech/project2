import { Injectable } from '@angular/core';
import { BasicauthService } from '../service/basicauth.service';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthService {

  constructor() { }
  
  
  authenticate(username,password){
  
  if(username==='ravi' && password==='dummy')
  {
  sessionStorage.setItem("auth", username);
  
  return true;
  }
  else 
  {
  return false;
  }
  
  }
  
  
  isUserLoggedIn(){
  var user = sessionStorage.getItem("auth");
  return !(user===null)
  }
  
  logout(){
  sessionStorage.removeItem("auth");
  
  }
  
}
