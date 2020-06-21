import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HardcodedauthService } from '../service/hardcodedauth.service';
import { BasicauthService } from '../service/basicauth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


username='ravi'
password=''
invalidCredential=false


errorMassage="INVALID USERNAME AND PASSWORD"
  constructor(private router:Router,private hardcodedauthService: HardcodedauthService,private basicauthService: BasicauthService) { }

  ngOnInit() {
  }
  
  handlelogin()   {
  
  if(this.hardcodedauthService.authenticate(this.username,this.password))
  {
  this.router.navigate(['welcome',this.username])
  
  this.invalidCredential=false
  }
  else{
  this.invalidCredential=true
  }
  }
  
   basicAuthlogin()   {
  
  this.basicauthService.executeAuth(this.username,this.password)
  .subscribe(
  data=>{
  
  console.log(data)
  this.router.navigate(['welcome',this.username])
  
  this.invalidCredential=false
  },
  error=> {
  console.log(error)
  this.invalidCredential=true
  
    }
  
  );
  
 
 }
 //////
 JWTbasicAuthlogin()   {
  
  this.basicauthService.executeJWTBasicAuth(this.username,this.password)
  .subscribe(
  data=>{
  
  console.log(data)
  this.router.navigate(['welcome',this.username])
  
  this.invalidCredential=false
  },
  error=> {
  console.log(error)
  this.invalidCredential=true
  
    }
  
  );
  
 
 }

}
