import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueComponent } from './queue/queue.component';
import { StackComponent } from './stack/stack.component';

const routes: Routes = [
  {path: 'queue', component: QueueComponent},
  {path: 'stack', component: StackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
