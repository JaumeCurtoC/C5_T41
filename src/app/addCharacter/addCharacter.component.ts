import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Character } from '../character.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-addCharacter',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css']
})
export class AddCharacterComponent implements OnInit {

  submitted = false;

  addChar: FormGroup;

  constructor(private charactersService: CharactersService,
    private fb: FormBuilder) {
      this.addChar = this.fb.group({
        name: new FormControl(''),
        status: new FormControl(''),
        species: new FormControl(''),
        gender: new FormControl(''),
        origin: new FormControl(''),
        location: new FormControl('')
      });
    }

  ngOnInit() {
  }

  saveCharacter(): void {
    const data = {
      name: this.addChar.value.name,
      status: this.addChar.value.status,
      species: this.addChar.value.species,
      gender: this.addChar.value.gender,
      origin: this.addChar.value.origin,
      location: this.addChar.value.location
    };

    this.charactersService.addCharacter(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }

  newCharacter(): void {
    this.submitted = false;
    this.addChar = this.fb.group({
      name: new FormControl(''),
      status: new FormControl(''),
      species: new FormControl(''),
      gender: new FormControl(''),
      origin: new FormControl(''),
      location: new FormControl('')
    });
  }

}
