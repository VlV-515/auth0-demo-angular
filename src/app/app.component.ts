import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  token: any = '';
  constructor(public readonly auth0Svc: AuthService) {}
  ngOnInit(): void {
    this.auth0Svc.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) this.getToken();
    });
  }
  btnLogin(): void {
    this.auth0Svc.loginWithRedirect();
  }
  btnLogout(): void {
    this.auth0Svc.logout();
  }
  getToken(): void {
    this.auth0Svc.idTokenClaims$.subscribe((token) => {
      this.token = token?.__raw;
    });
  }
}
