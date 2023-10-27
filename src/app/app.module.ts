import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { UserapiComponent } from './userapi/userapi.component';
import { HttpClientModule } from '@angular/common/http';
import { PipiesComponent } from './pipies/pipies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    NavbarComponent,
    TodoComponent,
    UserapiComponent,
    PipiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
