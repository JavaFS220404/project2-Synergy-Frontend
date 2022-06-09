import { Component, OnInit } from '@angular/core';
import { Potion } from 'src/app/models/potion';
import { PotionService } from 'src/app/services/potion.service';

@Component({
  selector: 'app-potions',
  templateUrl: './potions.component.html',
  styleUrls: ['./potions.component.css']
})
export class PotionsComponent implements OnInit {

  potions: Potion[] = [];
  name: string = "";

  displayOnlyFavorites: boolean = false;
  favs: string[] = [];
  favPotions: Potion[] = [];

  constructor(private potionService:PotionService) { }

  ngOnInit(): void {
    this.getPotions();
  }

  getPotions = () => {
    this.potionService.getPotions().subscribe({
      next: (data: Potion[]) => {
        this.potions = data;
      },
      error: () => {
        console.log("Unable to access potion from API.");
      }
    });
  }

  Search() {
    if (this.name == "") {
      this.getPotions();
    } else {
      this.potions = this.potions.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  addFavorite = (potionId:string) => {
    this.potionService.addFavorite(potionId).subscribe({
      next: () => {
        console.log("Added favorite: "+potionId);
      },
      error: () => {
        console.log("Unable to access favorites.");
      }
    });
  }

  toggleFavorites() {
    if (this.displayOnlyFavorites) {
      this.displayOnlyFavorites = false;
    } else {
      this.getMyFavorites();
      console.log("Retrieving favorites...");
      this.displayOnlyFavorites = true;
    }
  }

  getMyFavorites = () => {
    this.potionService.getMyFavorites().subscribe({
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

  isFav = (id: string): boolean => {
    this.getMyFavorites();
    for (let favId of this.favs) {
      if (favId == id) {
        return true;
      }
    }
    return false;
  }

  getFavorite = (id: string) => {
    this.potionService.getFavorite(id).subscribe({
      next: (data: Potion) => {
        this.favPotions.push(data);
      },
      error: () => {
        console.log("Unable to access favorites.");
      }
    });
  }

  deleteFavorite = (potionId: string) => {
    this.potionService.deleteFavorite(potionId).subscribe({
      next: () => {
        console.log("Deleted favorite, id: " + potionId);
      },
      error: () => {
        console.log("Unable to access favorites.");
      }
    });
  }



}
