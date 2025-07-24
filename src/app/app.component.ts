import { Component } from '@angular/core';
import { CardListComponent } from './card-list/card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
