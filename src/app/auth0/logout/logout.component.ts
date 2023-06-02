import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { PostMessajeAuth0Model } from '../models/PostMessageAuth0.model';
import { environment } from 'src/environments/environment.prod';

@Component({
  template: `<h1>Logout works!</h1>`,
})
export default class LogoutComponent implements OnInit {
  constructor(private readonly auth0Svc: AuthService) {}
  ngOnInit(): void {
    this.auth0Svc.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.auth0Svc.logout();
        return;
      }
      this.sendInfo();
    });
  }
  private sendInfo(): void {
    const objSend: PostMessajeAuth0Model = {
      isLogin: false,
    };
    window.parent.postMessage(objSend, environment.urlHost);
  }
}
