import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  
  getCategories(){
    return this.http.get( `https://api.publicapis.org/categories`)
  }
}
