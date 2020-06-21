import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './../../app.constant';

import { Movie } from '../../movie-list/movie-list.component';

@Injectable({
  providedIn: 'root'
})
export class RetriveService {

movie:Movie

  constructor(private http:HttpClient) { }
  
  
  retriveAll(){
  
  return this.http.get<Movie[]>(`${API_URL}/jpa/users/movie`);
 // console.log("hello world April 28")
  }
  
  
   deleteMovies(id){
  
  return this.http.delete(`${API_URL}/jpa/users/movie/${id}`);
 // console.log("hello world April 28")
  }
  
  
   retriveMovies(id){
  
  return this.http.get<Movie>(`${API_URL}/jpa/users/movie/${id}`);
 // console.log("hello world April 28")
  }
  
  
  
  saveMovies(id,movie){
  
  return this.http.put<Movie>(`${API_URL}/jpa/users/movie/${id}`,movie);
 // console.log("hello world April 28")
  }
  
  
  addMovies(movie){
  
  return this.http.post<Movie>(`${API_URL}/jpa/users/movie/`,movie);
 // console.log("hello world April 28")
  }
  
}
