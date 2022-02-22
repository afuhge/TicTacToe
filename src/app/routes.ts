import { Routes } from '@angular/router';
import { GameIsStartedResolver } from './core/resolvers/game-is-started.resolver';

export const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('./pages/start-game/start-game.module').then(m => m.StartGameModule)
  },
  {
    resolve: [GameIsStartedResolver],
    path: 'play',
    loadChildren: () => import('./pages/play-game/play-game.module').then(m => m.PlayGameModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then(m => m.InfoModule)
  },
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];
