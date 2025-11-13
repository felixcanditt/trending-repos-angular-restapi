import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor() {
    this.log();
  }

  log() {
    fetch('https://api.github.com/search/repositories?q=created:>2025-10-13&sort=stars&order=desc')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items);
      })
      .catch((error) => console.error(error));
  }
}
