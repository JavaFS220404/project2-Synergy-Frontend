import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { PotionsComponent } from './components/potions/potions.component';
import { SpellsComponent } from './components/spells/spells.component';

const routes: Routes = [{
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
