import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayGameComponent } from './play-game.component';
import { RouterModule } from '@angular/router';
import { WinModalModule } from '../parts/win-modal/win-modal.module';
import { GameIsStartedGuard } from '../core/guards/game-is-started-guard';



@NgModule({
  declarations: [
    PlayGameComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: PlayGameComponent,
    }]),
    WinModalModule,
  ],
  exports: [
    PlayGameComponent,
  ],
})
export class PlayGameModule { }
