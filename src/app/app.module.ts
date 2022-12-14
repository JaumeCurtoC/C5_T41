import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersModule } from './characters/characters.module';
import { ElementsModule } from './elements/elements.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCharacterComponent } from './addCharacter/addCharacter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCharacterComponent } from './updateCharacter/updateCharacter.component';

@NgModule({
  declarations: [	
    AppComponent,
      HomeComponent,
      AboutComponent,
      AddCharacterComponent,
      UpdateCharacterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule,
    ElementsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
