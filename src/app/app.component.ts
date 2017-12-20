import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {

  }

  // 编程式导航
  toProductDetails () {
    // 携带参数导航 -url
    this.router.navigate(['product', 2]);
  }
}
