import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LessonTextInterpolationComponent } from './views/lesson-text-interpolation/lesson-text-interpolation.component';
import { ListFriendsComponent } from './views/list-friends/list-friends.component';
import { ListFriendsPropertyBindingComponent } from './views/list-friends-property-binding/list-friends-property-binding.component';
import { ListFriendsEventBindingComponent } from './views/list-friends-event-binding/list-friends-event-binding.component';
import { ListFriendsNgmodelComponent } from './views/list-friends-ngmodel/list-friends-ngmodel.component';
import { DataBindingComponent } from './views/data-binding/data-binding.component';
import { DirectiveNgifComponent } from './views/directive-ngif/directive-ngif.component';

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
  { path: 'directive-ngstyle', component: DirectiveNgstyleComponent},
  
  // Root redirection (login or home, ...)
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  // Error Route
  { path: '**', loadComponent: () => import('./shared-components/not-found/not-found.component').then(m => m.NotFoundComponent) },
];
