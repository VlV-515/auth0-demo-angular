import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { PostMessajeAuth0Model } from './auth0/models/PostMessageAuth0.model';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor(
    private readonly auth0Svc: AuthService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.auth0Svc.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.auth0Svc.user$.subscribe(this.sendInfoAuth0);
        return;
      }
    });
  }
  private sendInfoAuth0(user: User | null | undefined): void {
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
