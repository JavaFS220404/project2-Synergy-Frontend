import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PotionsComponent } from './components/potions/potions.component';
import { RegisterComponent } from './components/register/register.component';
import { SpellsComponent } from './components/spells/spells.component';

const routes: Routes = [{
  path:"",
  component:LoginComponent
},{
  path:"login",
  component:LoginComponent
},{
  path:"register",
  component:RegisterComponent
},{
  path:"logout",
  component:LogoutComponent
},{
  path: 'characters',
  component: CharactersComponent
}, {
  path: 'potions',
  component: PotionsComponent
}, {
  path: 'spells',
  component: SpellsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
