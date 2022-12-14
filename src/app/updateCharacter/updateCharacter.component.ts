import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../character.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-updateCharacter',
  templateUrl: './updateCharacter.component.html',
  styleUrls: ['./updateCharacter.component.css']
})
export class UpdateCharacterComponent implements OnInit {

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

  upChar:FormGroup;

  constructor
  (private charactersService: CharactersService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
      this.upChar = this.fb.group({
        name: this.char.name,
        status: new FormControl(''),
        species: new FormControl(''),
        gender: new FormControl(''),
        origin: new FormControl(''),
        location: new FormControl('')
      });
    }

    ngOnInit() {
      this.getCharacter(this.route.snapshot.params['id']);
      this.upChar = this.fb.group({
        name: this.char.name,
        status: this.char.status,
        species: this.char.species,
        gender: this.char.gender,
        origin: this.char.origin,
        location: this.char.location
      });
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

  updateCharacter() {
    this.char = {
      id: this.route.snapshot.params['id'],
      name: this.upChar.value.name,
      status: this.upChar.value.status,
      species: this.upChar.value.species,
      gender: this.upChar.value.gender,
      origin: this.upChar.value.origin,
      location: this.upChar.value.location
    }

    this.charactersService.updateCharacter(this.route.snapshot.params['id'], this.char)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/characters/'+this.char.id]);
      },
      error => {
        console.log(error);
      }
    );
  }

}
