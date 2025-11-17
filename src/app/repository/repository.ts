import { Component, Input } from '@angular/core';
import { Repository } from '../app';

@Component({
  selector: 'app-repository',
  imports: [],
  templateUrl: './repository.html',
  styleUrl: './repository.css',
})
export class RepositoryComponent {
  @Input() repository!: Repository;

  daysAgo(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();

    const diffMs = now.getTime() - date.getTime();
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }
}
