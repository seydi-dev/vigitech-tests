import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, DashboardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'vigitech-tests';
}
