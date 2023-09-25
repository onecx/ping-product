import { Route } from '@angular/router';

import { NxWelcomeComponent } from './nx-welcome.component';


export const appRoutes: Route[] = [
    {
        path: '',
        component: NxWelcomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'score',
        loadComponent: () =>
        import('@ping/game-lib').then((m) => m.ScoreListComponent),
    },      
    {
        path: 'player',
        loadComponent: () =>
          import('@ping/player').then((m) => m.PlayerComponent),
    },      
];