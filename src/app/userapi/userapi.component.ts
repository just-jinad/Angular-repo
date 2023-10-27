import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userapi',
  templateUrl: './userapi.component.html',
  styleUrls: ['./userapi.component.css']
})
export class UserapiComponent {
  constructor(public fetchDataapi:ApiService){}
  fetchedData:any=[]
  generateApi(){
    this.fetchDataapi. fetchApi().subscribe(response=>{
      this.fetchedData = response
      console.log(this.fetchedData);
      
    }, (error)=>{
      console.log(error);
      
    })
  }
}
