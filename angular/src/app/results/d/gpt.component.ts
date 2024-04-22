import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css'],
})
export class DComponent {
  currentPath: string;

  constructor(private router: Router) {
    this.currentPath = this.router.url;
  }
}
