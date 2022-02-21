import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-win-modal',
  templateUrl: './win-modal.component.html',
})
export class WinModalComponent {
  @Input() public classes: string = '';
  @Input() public buttonClasses: string = '';
  @Input() public winnerText: string = '';
  @Output() public isGameOver = new EventEmitter<boolean>();
  @Input() public winnerTextClass: string = '';

  public playAgain (): void {
    this.isGameOver.emit(false);
  }
}
