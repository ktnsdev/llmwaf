import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-d',
  standalone: true,
  imports: [Location],
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css'],
})
export class DComponent implements OnInit {
  currentPath: string = '';

  constructor(private location: Location) {}

  ngOnInit() {
    this.currentPath = this.location.path();
  }
}
