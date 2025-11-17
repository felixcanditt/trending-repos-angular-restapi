import { Component } from '@angular/core';
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
  repositories: Repository[] = [];
  apiPage = 1;

  ngOnInit() {
    this.fetchRepositories();
  }

  fetchRepositories() {
    fetch(
      `https://api.github.com/search/repositories?q=created:>2025-10-13&sort=stars&order=desc&page=${this.apiPage}`,
    )
      .then((response) => response.json())
      .then((data) => {
        this.repositories.push(...data.items);
      })
      .catch((error) => console.error(error));
  }

  showMoreRepositories() {
    this.apiPage++;
    this.fetchRepositories();
  }
}
