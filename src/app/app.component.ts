import { Component } from '@angular/core';
import { INCLUDE } from './hi.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  include = INCLUDE;
  title = 'ts-test';
}
