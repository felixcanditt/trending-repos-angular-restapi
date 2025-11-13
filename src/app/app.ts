import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  myData: Repository[] = [];

  constructor() {
    this.log();
  }

  log() {
    fetch('https://api.github.com/search/repositories?q=created:>2025-10-13&sort=stars&order=desc')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items);
        this.myData = data.items;
        console.log(this.myData[0]);
      })
      .catch((error) => console.error(error));
  }
}
