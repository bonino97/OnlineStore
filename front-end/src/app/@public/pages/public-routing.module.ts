import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from 'src/app/@public/pages/public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('src/app/@public/pages/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('src/app/@public/pages/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
