import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello, world!';
  show = 0;
  datetitle ="crount to day date is.";
  dt = new Date();
  price= 10000;
}
