import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-win-modal',
  templateUrl: './win-modal.component.html',
})
export class WinModalComponent {
  @Input() public classes: string = '';
  @Input() public buttonTextColor: string = '';
  @Input() public winnerText: string = '';
  @Output() public isGameOver = new EventEmitter<boolean>();

  public playAgain (): void {
    this.isGameOver.emit(false);
  }
}
