import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment.prod';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(environment.auth0Credentials),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
