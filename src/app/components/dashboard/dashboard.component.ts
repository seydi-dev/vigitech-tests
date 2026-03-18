import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  currentUser: string | null = null;
  stats = [
    { label: 'Rondes effectuées', value: 42 },
    { label: 'Sites actifs', value: 8 },
    { label: 'Agents en service', value: 15 },
    { label: 'Alertes aujourd\'hui', value: 3 },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }
}
