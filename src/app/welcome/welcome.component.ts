import { Component, OnInit } from '@angular/core';
import { WelcomedataService } from '../service/data/welcomedata.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

welcomeMessageFromService:string
name=""
  constructor(private route:ActivatedRoute,private welcomedataService:WelcomedataService) { }

  ngOnInit() {
  
  this.name=this.route.snapshot.params['name']
  }
  
getwelcomemessage(){
 
 
 //console.log(this.welcomedataService.executeHelloworld();
 this.welcomedataService.executeHelloworld().subscribe(
 response => this.handleRespone(response)
 );
 //console.log("get welcome msg hiiii")
 

}

handleRespone(response){
this.welcomeMessageFromService=response.msg

}
}
