import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: "music-app", loadChildren: () => import('./stream/stream.module').then(m => m.StreamModule) },

  // { path: '**', redirectTo: '/auth' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
