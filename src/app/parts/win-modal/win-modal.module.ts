import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinModalComponent } from './win-modal.component';

@NgModule({
  declarations: [
    WinModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [WinModalComponent],
})
export class WinModalModule {}
