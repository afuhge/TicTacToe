import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartGameComponent } from './start-game.component';
import { VersusModule } from '../../parts/versus/versus.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StartGameComponent
  ],
  imports: [
    CommonModule,
    VersusModule,
    RouterModule.forChild([
      {
        path: '',
        component: StartGameComponent,
      }
    ])
  ],
  exports: [StartGameComponent],
})
export class StartGameModule {}
