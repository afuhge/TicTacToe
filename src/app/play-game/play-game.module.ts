import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayGameComponent } from './play-game.component';
import { RouterModule } from '@angular/router';
import { WinModalModule } from '../parts/win-modal/win-modal.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
  ],
  exports: [
    PlayGameComponent,
  ],
})
export class PlayGameModule {}
