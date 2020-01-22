import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const apiURL = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getImages(searchText) {
    console.log(apiURL + searchText);
    return this.http.get(apiURL + searchText);
  }
}
