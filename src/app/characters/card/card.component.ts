import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() character:any = null;
  data:number = 0;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.data = this.character.id;
  }

}
