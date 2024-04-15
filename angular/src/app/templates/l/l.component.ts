import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l',
  standalone: true,
  imports: [],
  templateUrl: './l.component.html',
  styleUrl: './l.component.css',
})
export class LComponent implements OnInit {
  public data = false;

  ngOnInit(): void {
    (async () => {
      await this.getData();
    })();
  }

  public async getData(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        this.data = true;
      }, 2000);
    });
  }
}
