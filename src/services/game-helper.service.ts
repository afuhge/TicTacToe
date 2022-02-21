import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameHelperService {
  public gameIsStarted$: Observable<boolean> = new Observable<boolean>();
  private gameIsStartedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor () {
    this.gameIsStarted$ = this.gameIsStartedSubject.asObservable();
  }

  public startGame(): void {
    this.gameIsStartedSubject.next(true);
  }

  public hasGameStarted(): boolean {
   return this.gameIsStartedSubject.value;
  }
}
