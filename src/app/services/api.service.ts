import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public userDeatilapi:HttpClient) { }
  fetchApi(){
    return this.userDeatilapi.get('https://api.github.com/users')
  }
}
