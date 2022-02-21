import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VersusModule } from './parts/versus/versus.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { GameIsStartedResolver } from './core/resolvers/game-is-started.resolver';
import { HeaderModule } from './parts/header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VersusModule,
    RouterModule.forRoot(routes),
    HeaderModule
  ],
  providers: [
    GameIsStartedResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
