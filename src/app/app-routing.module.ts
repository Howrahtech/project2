import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { LoginComponent} from './login/login.component';
import { MovieListComponent} from './movie-list/movie-list.component';
import { LogoutComponent} from './logout/logout.component';

import { UpdatemovieComponent} from './updatemovie/updatemovie.component';

import { RoutegardserviceService } from './service/routegardservice.service';
import { ErrorComponent} from './error/error.component';
const routes: Routes = [

{path:'',   component:LoginComponent},

{path:'login',   component:LoginComponent},
{path:'welcome/:name', component:WelcomeComponent,canActivate:[RoutegardserviceService]},
{path:'movielist',   component:MovieListComponent,canActivate:[RoutegardserviceService]},



{path:'updatemovie/:id',   component:UpdatemovieComponent,canActivate:[RoutegardserviceService]},
{path:'logout',   component:LogoutComponent,canActivate:[RoutegardserviceService]},
{path:'**',   component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
