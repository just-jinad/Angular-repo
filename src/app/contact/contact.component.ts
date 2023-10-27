import { Component } from '@angular/core';
interface contactSignup{
  Firstname:string
  Lastname:string
  Email:string
  Pin:string
  Number:string
  Address:string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public firstname = ""
  public lastname = ""
  public email = ""
  public pin = ""
  public num = ""
  public  address = ""
  public contactContainer:contactSignup[]=[]

  public addContact = () =>{
    let storage={
      Firstname: this.firstname,
      Lastname:this.lastname,
      Email:this.email,
      Pin:this.pin,
      Number:this.num,
      Address:this.address
    }  
    this.contactContainer.push(storage)
    console.log(this.contactContainer);
    
  }
}
