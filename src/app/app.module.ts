import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VersusModule } from './parts/versus/versus.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { GameIsStartedGuard } from './core/guards/game-is-started-guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VersusModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    GameIsStartedGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
