import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddCharacterComponent } from './addCharacter/addCharacter.component';
import { DetailComponent } from './characters/detail/detail.component';
import { ListComponent } from './characters/list/list.component';
import { HomeComponent } from './home/home.component';
import { UpdateCharacterComponent } from './updateCharacter/updateCharacter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'characters',
    component: ListComponent
  },
  {
    path: 'characters/:id',
    component: DetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'add',
    component: AddCharacterComponent
  },
  {
    path: 'characters/:id/update',
    component: UpdateCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
