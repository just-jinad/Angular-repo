import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TodoComponent } from './todo/todo.component';
import { UserapiComponent } from './userapi/userapi.component';

const routes: Routes = [
  {path: "", component:AppComponent},
  {path: "contact", component:ContactComponent},
  {path: "homepage", component:HomepageComponent},
  {path: "todo", component:TodoComponent},
  {path:"userapi", component:UserapiComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
