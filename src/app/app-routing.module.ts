import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'view-person',
    loadChildren: () => import('./view-person/view-person.module').then( m => m.ViewPersonPageModule)
  },
  {
    path: 'edit-person',
    loadChildren: () => import('./edit-person/edit-person.module').then( m => m.EditPersonPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
