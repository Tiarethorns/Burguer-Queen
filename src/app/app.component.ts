import { Component } from '@angular/core';
import  menu  from '../assets/json/menu.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyect01';
    menu:any=menu
}
