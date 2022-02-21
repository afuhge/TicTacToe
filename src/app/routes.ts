import { Routes } from '@angular/router';
import { GameIsStartedResolver } from './core/resolvers/game-is-started.resolver';

export const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('./start-game/start-game.module').then(m => m.StartGameModule)
  },
  {
    resolve: [GameIsStartedResolver],
    path: 'play',
    loadChildren: () => import('./play-game/play-game.module').then(m => m.PlayGameModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then(m => m.InfoModule)
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
];
