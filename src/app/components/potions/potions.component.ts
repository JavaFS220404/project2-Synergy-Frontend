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
      },
      error: () => {
        console.log("Unable to access favorites.");
      }
    });
  }



}
