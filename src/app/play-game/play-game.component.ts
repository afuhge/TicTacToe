import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {
  public isGameOver: boolean = false;
  greenWins: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public openModal (): void {
    this.isGameOver = true;
  }

  public handleIsGameOver (gameOver: boolean): void {
   this.isGameOver = gameOver;
  }
}
