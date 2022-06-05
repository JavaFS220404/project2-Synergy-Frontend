import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { LoginComponent } from './components/login/login.component';
import { PotionsComponent } from './components/potions/potions.component';
import { SpellsComponent } from './components/spells/spells.component';

const routes: Routes = [{
  path:"",
  component:LoginComponent
},{
  path:"login",
  component:LoginComponent
},{
  path: 'Characters',
  component: CharactersComponent
}, {
  path: 'Potions',
  component: PotionsComponent
}, {
  path: 'Spells',
  component: SpellsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
