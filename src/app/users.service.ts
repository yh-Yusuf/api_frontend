import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData()
  {

    // https://jsonplaceholder.typicode.com/posts
   
    let url = "http://127.0.0.1:8000/get_model/";
    return this.http.get(url)
  }
}
