import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import { Movie } from '../movie-list/movie-list.component';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {
movie:Movie
  constructor(private http: HttpClient) { }
  
  
  
  pushFileToStorage(file: File,movie): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('movie', movie);
    const req = new HttpRequest('POST', `http://localhost:8082/profile/uploadpicture`, formdata, {
      reportProgress: true,
      responseType: 'text'
    }
    );
    return this.http.request(req);
  }
  
  
  
}
