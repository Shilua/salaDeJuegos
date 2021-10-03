import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { ErrorComponent } from './components/error/error.component';
import { AhorcadoComponent } from './components/games/ahorcado/ahorcado.component';
import { HomeComponent } from './components/home/home.component';
import { JuegosComponent } from './components/games/juegos/juegos.component';
import { LoginComponent } from './components/login/login.component';
import { MayorOMenorComponent } from './components/mayor-o-menor/mayor-o-menor.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'error', component: ErrorComponent,canActivate:[AuthGuard] },
  { path: 'register', component:RegisterComponent, canActivate:[AuthGuard]},
  { path: 'quien-soy', component:QuienSoyComponent, canActivate:[AuthGuard]},
  { path: 'chat', component:ChatComponent, canActivate:[AuthGuard]},
  { path: 'juegos', component:JuegosComponent, canActivate:[AuthGuard],
    children: [
      {path: '', component:MenuCardComponent},
      {path: 'ahorcado', component:AhorcadoComponent},
      {path: 'mayor-o-menor', component:MayorOMenorComponent}

    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
