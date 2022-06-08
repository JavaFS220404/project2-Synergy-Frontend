import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

    characters: Character[] = [];
    icon = "&#10004";
    nickname: any;
    hogwartsHouse: any;

  constructor(private characterService: CharacterService) { }
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters = () => {
    this.characterService.getCharacters().subscribe({
      next: (data: Character[]) => {
        this.characters = data;
      },
      error: () => {
        console.log("Unable to access todo from API.");
      }
    });
  }
  
  Search() {
    if (this.nickname == "") {
      this.getCharacters();
    } else {
      this.characters = this.characters.filter(res => {
        return res.nickname.toLocaleLowerCase().match(this.nickname.toLocaleLowerCase());
      })
    }
  }

  addFavorite = (characterId: string) => {
    this.characterService.addFavorite(characterId).subscribe({
      next: () => {
      },
      error: () => {
        console.log("Unable to access favorites.");
      }
    });
  }

  
  Searchhouse() {
    if (this.hogwartsHouse == "") {
      this.getCharacters();
    } else {
      this.characters = this.characters.filter(res => {
        return res.hogwartsHouse.toLocaleLowerCase().match(this.hogwartsHouse.toLocaleLowerCase());
      })
    }
  }
}
