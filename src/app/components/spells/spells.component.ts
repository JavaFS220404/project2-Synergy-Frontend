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
        console.log("Unable to access todo from API.");
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



}
