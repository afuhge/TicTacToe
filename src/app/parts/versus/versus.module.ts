import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersusComponent } from './versus.component';

@NgModule({
  declarations: [
    VersusComponent
  ],
  exports: [
    VersusComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VersusModule {}
