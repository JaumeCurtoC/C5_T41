import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import {HttpClientModule} from '@angular/common/http'
import { ElementsModule } from "../elements/elements.module";

@NgModule({
    declarations: [
        ListComponent,
        CardComponent,
        DetailComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ElementsModule
    ]
})
export class CharactersModule { }
