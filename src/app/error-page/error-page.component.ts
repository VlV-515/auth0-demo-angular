import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `<h1 style="text-align: center">404 Not Found</h1>`,
})
export class ErrorPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
