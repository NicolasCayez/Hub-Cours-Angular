import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LessonTextInterpolationComponent } from './views/lessons/lesson-text-interpolation/lesson-text-interpolation.component';
import { ListFriendsComponent } from './views/exercices/list-friends/list-friends.component';
import { ListFriendsPropertyBindingComponent } from './views/exercices/list-friends-property-binding/list-friends-property-binding.component';
import { ListFriendsEventBindingComponent } from './views/exercices/list-friends-event-binding/list-friends-event-binding.component';
import { ListFriendsNgmodelComponent } from './views/exercices/list-friends-ngmodel/list-friends-ngmodel.component';
import { DataBindingComponent } from './views/exercices/data-binding/data-binding.component';
import { DirectiveNgifComponent } from './views/exercices/directive-ngif/directive-ngif.component';
import { DirectiveNgforComponent } from './views/exercices/directive-ngfor/directive-ngfor.component';
import { ParentComponent } from './views/lessons/parent/parent.component';
import { UserControlCenterParentComponent } from './views/exercices/user-control-center-parent/user-control-center-parent.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  // other routes
  { path: 'lesson-text', component: LessonTextInterpolationComponent},
  { path: 'list-friends', component: ListFriendsComponent},
  { path: 'list-friends-property-binding', component: ListFriendsPropertyBindingComponent},
  { path: 'list-friends-event-binding', component: ListFriendsEventBindingComponent},
  { path: 'list-friends-event-binding', component: ListFriendsEventBindingComponent},
  { path: 'list-friends-ngmodel', component: ListFriendsNgmodelComponent},
  { path: 'data-binding', component: DataBindingComponent},
  { path: 'directive-ngif', component: DirectiveNgifComponent},
  { path: 'directive-ngfor', component: DirectiveNgforComponent},
  { path: 'parent', component: ParentComponent},
  { path: 'user-control-center', component: UserControlCenterParentComponent},
  
  // Root redirection (login or home, ...)
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  // Error Route
  { path: '**', loadComponent: () => import('./shared-components/not-found/not-found.component').then(m => m.NotFoundComponent) },
];
