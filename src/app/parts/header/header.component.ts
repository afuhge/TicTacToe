import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  info: IconDefinition = faInfoCircle;

  constructor (
    private router: Router,
  ) { }

  public navigateToStart (): void {
    this.router.navigate(['/start']).then();
  }

  public navigateToInfoPage (): void {
    this.router.navigate(['/info']).then();
  }

}
