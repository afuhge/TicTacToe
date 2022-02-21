import { ActivatedRouteSnapshot, CanActivate, Resolve, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { GameHelperService } from '../../../services/game-helper.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class GameIsStartedGuard implements Resolve<any> {
  constructor (
    private gameHelper: GameHelperService,
    private router: Router,
  ) {}

  resolve (route: ActivatedRouteSnapshot): Observable<any> {
    if (this.gameHelper.hasGameStarted()) {
      return of(this.gameHelper.hasGameStarted());
    }
    return of(this.router.navigate(['/start']));
  }
}
