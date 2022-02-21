import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit {

  constructor (
    private router: Router,
  ) { }

  ngOnInit (): void {
  }

  public navigateToStart (): void {
    this.router.navigate(['/start']).then();
  }
}
