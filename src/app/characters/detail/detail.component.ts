import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/character.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  char: Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    image: ''
  }

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.getCharacter(this.route.snapshot.params['id']);
  }

  getCharacter(id: string){
    this.charactersService.getCharacterbyId(id)
    .subscribe(
      data => {
        this.char = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteCharacter() {
    this.charactersService.deleteCharacter(this.char.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/characters']);
      },
      error => {
        console.log(error);
      }

    )
  }
}
