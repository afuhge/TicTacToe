import { Component } from '@angular/core';
import { FieldStatusEnum } from '../core/enums/field-status.enum';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
})
export class PlayGameComponent {
  public isGameOver: boolean = false;
  public winner: string = 'none';
  public counter: number = 9;
  public fieldEnum: any = FieldStatusEnum;
  public field: FieldStatusEnum[][] = [];

  constructor () {
    this.reset();
  }

  public getBorderClasses (i: number, j: number): string {
    let classes: string [] = [];
    if (i === 0 || i === 1) {
      classes.push('border-b-4');
    }
    if (j === 1) {
      classes.push('border-l-4');
      classes.push('border-r-4');
    }

    return classes.join(' ');
  }

  private reset (): void {
    for (let i = 0; i < 3; i++) {
      this.field[i] = [];
      for (let j = 0; j < 3; j++) {
        this.field[i][j] = FieldStatusEnum.EMPTY;
      }
    }
    this.counter = 9;
    this.winner = 'none';
  }

  public handleIsGameOver (gameOver: boolean): void {
    this.isGameOver = gameOver;
    this.reset();
  }

  public setItem (i: number, j: number): void {
    if (this.counter % 2 !== 0) {
      // set O
      this.field[i][j] = FieldStatusEnum.O;
    } else {
      // set X
      this.field[i][j] = FieldStatusEnum.X;
    }

    this.checkFields();
    this.counter -= 1;
    if (this.counter === 0) {
      this.isGameOver = true;
    }
  }

  private checkRows (i: number): boolean {
    if (this.field[i][0] === FieldStatusEnum.O && this.field[i][1] === FieldStatusEnum.O && this.field[i][2] === FieldStatusEnum.O) {
      this.winner = 'green';
      return true;
    }
    if ((this.field[i][0] === FieldStatusEnum.X && this.field[i][1] === FieldStatusEnum.X) && this.field[i][2] === FieldStatusEnum.X) {
      this.winner = 'red';
      return true;
    }
    return false;
  }

  private checkCols (j: number): boolean {
    if (this.field[0][j] === FieldStatusEnum.O && this.field[1][j] === FieldStatusEnum.O && this.field[2][j] == FieldStatusEnum.O) {
      this.winner = 'green';
      return true;
    }
    if (this.field[0][j] === FieldStatusEnum.X && this.field[1][j] === FieldStatusEnum.X && this.field[2][j] == FieldStatusEnum.X) {
      this.winner = 'red';
      return true;
    }
    return false;
  }

  private checkDiagonals (): boolean {
    if (this.field[0][0] === FieldStatusEnum.O && this.field[1][1] === FieldStatusEnum.O && this.field[2][2] == FieldStatusEnum.O) {
      this.winner = 'green';
      return true;
    }
    if (this.field[0][0] === FieldStatusEnum.X && this.field[1][1] === FieldStatusEnum.X && this.field[2][2] === FieldStatusEnum.X) {
      this.winner = 'red';
      return true;
    }
    if (this.field[2][0] === FieldStatusEnum.O && this.field[1][1] === FieldStatusEnum.O && this.field[0][2] === FieldStatusEnum.O) {
      this.winner = 'green';
      return true;
    }
    if (this.field[2][0] === FieldStatusEnum.X && this.field[1][1] === FieldStatusEnum.X && this.field[0][2] === FieldStatusEnum.X) {
      this.winner = 'red';
      return true;
    }
    return false;
  }

  private checkFields (): void {
    for (let i = 0; i < 3; i++) {
      if (this.checkRows(i)) {
        this.isGameOver = true;
        return;
      }
      if (this.checkCols(i)) {
        this.isGameOver = true;
        return;
      }
    }
    if (this.checkDiagonals()) {
      this.isGameOver = true;
    }
  }
}
