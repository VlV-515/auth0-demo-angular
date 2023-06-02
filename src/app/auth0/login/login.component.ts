import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment.prod';
import { PostMessajeAuth0Model } from '../models/PostMessageAuth0.model';

@Component({
  template: `<h1>Login works!</h1>`,
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly auth0Svc: AuthService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.auth0Svc.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.auth0Svc.user$.subscribe(this.sendInfo);
        return;
      }
      this.auth0Svc.loginWithRedirect();
    });
  }
  private sendInfo(user: User | null | undefined): void {
    if (!user) {
      this.router.navigate(['error']);
      return;
    }
    const objSend: PostMessajeAuth0Model = {
      sub: user.sub,
      isLogin: true,
    };
    window.parent.postMessage(objSend, environment.urlHost);
  }
}
