import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {

 constructor(public msg:string) { }

}

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {



  constructor(private http:HttpClient) { }
  
  executeHelloworld(){
  let basicAuthHeaderString=this.createBasicHeader();
  
  let headers=new HttpHeaders({
  
      Authorization: basicAuthHeaderString
      })
  return this.http.get<HelloWorldBean>(`http://localhost:8082/hello-world-bean`,{headers});
 // console.log("hello world April 28")
  }
  
  
  
  
  createBasicHeader()
  {
    let username='ravi'
    let password='dummy'
     let basicAuthHeaderString='Basic '+window.btoa(username + ':' + password);
  
     return basicAuthHeaderString
  }
  
}
