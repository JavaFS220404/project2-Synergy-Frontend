import { Component, OnInit } from '@angular/core';
import { Spell } from 'src/app/models/spell';
import { SpellService } from 'src/app/services/spell.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  spells: Spell[] = [];
  name: any;
  icon = "&#10004";

  displayOnlyFavorites:boolean = false;
  favs: string[] = [];
  favSpells: Spell[] = [];

  constructor(private spellService: SpellService) { }

  ngOnInit(): void {
    this.getSpells();
  }

  getSpells = () => {
    this.spellService.getSpells().subscribe({
      next: (data: Spell[]) => {
        this.spells = data;
      },
      error: () => {
        console.log("Unable to access spell from API.");
      }
    });
  }

  Search() {
    if (this.name == "") {
      this.getSpells();
    } else {
      this.spells = this.spells.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  addFavorite = (spellId: string) => {
    this.spellService.addFavorite(spellId).subscribe({
      next: () => {
        console.log("Added favorite, id: "+spellId);
      },
      error: () => {
        console.log("Unable to access favorites.");
      }
    });
  }

  toggleFavorites(){
    if (this.displayOnlyFavorites){
      this.displayOnlyFavorites = false;
    }else{
      this.getMyFavorites();
      console.log("Retrieving favorites...");
      this.displayOnlyFavorites = true;
    }
  }

  getMyFavorites = () => {
    this.spellService.getMyFavorites().subscribe({
      next: (data: string[]) => {
        this.favs = data;
        for (let favId of data) {
          this.getFavorite(favId);
        }
        console.log("Favorites retrieved.");
      },
      error: () => {
        console.log("Unable to access favorites.");
      }
    });
  }

  isFav = (id:string):boolean => {
    this.getMyFavorites();
    for (let favId of this.favs) {
      if(favId==id){
        return true;
      }
    }
    return false;
  }

  getFavorite = (id:string) => {
    this.spellService.getFavorite(id).subscribe({
      next: (data: Spell) => {
        this.favSpells.push(data);
      },
      error: () => {
        console.log("Unable to access favorites.");
      }
    });
  }


}
