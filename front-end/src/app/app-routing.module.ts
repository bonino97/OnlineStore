import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Public Module.
  {
    path: '',
    loadChildren: () =>
      import('src/app/@public/pages/public.module').then((m) => m.PublicModule),
  },

  // Admin Module.
  {
    path: 'admin',
    loadChildren: () =>
      import('src/app/@admin/pages/admin.module').then((m) => m.AdminModule),
  },

  // Redirect Side.
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
