import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from '../../character.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters?: Character[];

  constructor(private charactersService: CharactersService){}

  ngOnInit() {
    this.charactersService.getCharacters()
    .subscribe(
      data => {
        this.characters = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
