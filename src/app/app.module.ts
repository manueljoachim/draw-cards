import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { CardsHandComponent } from './components/cards-hand/cards-hand.component';
import { CardHandModelService } from './services/card-hand-model.service';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterBarComponent,
    CardsHandComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ CardHandModelService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
