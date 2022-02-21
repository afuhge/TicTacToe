import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
})
export class InfoComponent {

  constructor (
    private router: Router,
  ) { }

  public navigateToStart (): void {
    this.router.navigate(['/start']).then();
  }
}
