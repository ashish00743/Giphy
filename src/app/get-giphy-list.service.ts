import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetGiphyListService {

  constructor(private http :  HttpClient) { }

  getGiphyList(name):  Observable<any>{
   return this.http.get('https://api.giphy.com/v1/gifs/search?api_key=bw4uBWLag6GBTciyx47FuokUQtuwk7A9&q=' + name);
  }
}
