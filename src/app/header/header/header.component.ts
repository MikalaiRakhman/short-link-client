import { Component, inject } from '@angular/core';
import { MatButtonModule} from '@angular/material/button'
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon'
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule ,MatToolbarModule, MatButtonModule, RouterLink, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  authService = inject(AuthService);
  router = inject(Router);

  onLogout(): void {
    this.authService.Logout();
    this.router.navigate(['']);
 }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  isAdmin(): boolean {
    return this.authService.isRoleAdmin();
  }

  isLoggedInAdmin(): boolean {
    return this.isLoggedIn() && this.isAdmin();
  }
}
