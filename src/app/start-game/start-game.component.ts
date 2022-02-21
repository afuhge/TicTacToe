import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameHelperService } from '../../services/game-helper.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
})
export class StartGameComponent {

  constructor (
    private gameHelperService: GameHelperService,
    private router: Router,
  ) { }

  public startGame (): void {
    this.gameHelperService.startGame();
    this.router.navigate(['./play']).then();
  }
}
