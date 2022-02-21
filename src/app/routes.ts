import { Routes } from '@angular/router';
import { GameIsStartedGuard } from './core/guards/game-is-started-guard';

export const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('./start-game/start-game.module').then(m => m.StartGameModule)
  },
  {
    resolve: [GameIsStartedGuard],
    path: 'play',
    loadChildren: () => import('./play-game/play-game.module').then(m => m.PlayGameModule)
  },
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
]
