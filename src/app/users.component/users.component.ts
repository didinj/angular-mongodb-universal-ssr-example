import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-users.component',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  private http = inject(HttpClient);
  users = signal<any[]>([]);
  loading = signal(true);


  constructor() {
    this.http.get<any[]>('/api/users').subscribe({
      next: (list) => { this.users.set(list); },
      error: (err) => console.error(err),
      complete: () => this.loading.set(false)
    });
  }
}
