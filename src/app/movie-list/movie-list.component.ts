import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RetriveService } from '../service/data/retrive.service'
export class Movie {

  constructor(
  public id: number,
  public movieName:string, 
   public desc:string,
   public comment:string,
  public rdate:Date,
  public rate:number,
  public imgUrl:String
  
  ) { }
  
  
  
}
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

 movie:  Movie[]

 message:string
  constructor(private retriveService:RetriveService, private router:Router) { }

  ngOnInit(  )
  {
  this.refreshMovies();
  }
  
  
  refreshMovies(){
  
  this.retriveService.retriveAll().subscribe(
  
  response =>{ 
  console.log(response);
  this.movie=response; 
  
  
  }
   );
  
  }
  
deleteMovie(id)
{
console.log('delete movie'+id)
  this.retriveService. deleteMovies(id).subscribe(
  
   response =>{ 
  console.log(response);
  this.message="DELETED SUCCESSFULLY " 
  this.refreshMovies();
  }
  );
 }
 
updateMovie(id){
console.log("HIIIIIIIIIIIIIII")
this.router.navigate(['updatemovie',id])
}


addMovie(){

this.router.navigate(['updatemovie',-1])
}

}

