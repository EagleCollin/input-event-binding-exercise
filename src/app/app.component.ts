import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'header';
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value
  }
}
