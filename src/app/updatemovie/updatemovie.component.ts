import { Component, OnInit } from '@angular/core';
import { RetriveService } from '../service/data/retrive.service';
import { Movie } from '../movie-list/movie-list.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FileUploadService } from '../service/file-upload.service';

import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
  
})
export class UpdatemovieComponent implements OnInit {
                      

     selectedFiles: FileList
   currentFileUpload: File
   
   id:number
 movie:  Movie
  constructor(private retriveService:RetriveService,private route:ActivatedRoute,private router:Router, 
  private uploadService:FileUploadService) { }
  
   selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload,this.movie).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }

  ngOnInit() {
  
    this.id=this.route.snapshot.params['id'];
  this.movie= new Movie(this.id,'','','',new Date(),4,'');
  
  
  if(this.id!=-1){
  this.retriveService.retriveMovies(this.id).subscribe(
  
  data =>  this.movie=data
  
   );
  }
  }
  
  
  savemovie(){
  
  
   if(this.id===-1){
   this.retriveService.addMovies(this.movie).subscribe(
  data=>{
  console.log(data)
  this.router.navigate(['movielist'])
  }
  
  );
  
   }
   else{
  this.retriveService.saveMovies(this.id,this.movie).subscribe(
  data=>{
  console.log(data)
  this.router.navigate(['movielist'])
  }
  
  );
  }
  }
  
  
  
  
  

}
