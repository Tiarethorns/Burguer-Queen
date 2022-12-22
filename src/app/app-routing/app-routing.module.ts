import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogInViewComponent } from '../log-in-view/log-in-view.component';
import { KitchenViewComponent } from '../kitchen-view/kitchen-view.component';
import { WaitersViewComponent } from '../waiters-view/waiters-view.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LogInViewComponent },
  { path: 'kitchen', component: KitchenViewComponent },
  {path: 'waiters', component: WaitersViewComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
