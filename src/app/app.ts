import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  isLoading = false;

  ngOnInit() {
    this.fetchRepositories();
  }

  @ViewChild('scrollTrigger') scrollTrigger!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isLoading) return;

    const el = this.scrollTrigger.nativeElement;
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight) {
      this.apiPage++;
      this.fetchRepositories();
    }
  }

  fetchRepositories() {
    this.isLoading = true;

    fetch(
      `https://api.github.com/search/repositories?q=created:>2025-10-13&sort=stars&order=desc&page=${this.apiPage}`,
    )
      .then((response) => response.json())
      .then((data) => {
        this.repositories.push(...data.items);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.isLoading = false;
      });
  }
}
