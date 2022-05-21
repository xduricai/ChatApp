import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PersonsService } from './services/persons.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chat App';

  constructor(private titleService: Title, public persons: PersonsService) {
    this.titleService.setTitle(this.title);
  }
}
