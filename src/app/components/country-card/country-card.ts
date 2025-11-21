import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { hasFlag } from 'country-flag-icons'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Country } from '../../models/country.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-country-card',
  imports: [MatCardModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './country-card.html',
  styleUrl: './country-card.css',
})
export class CountryCard {

  public get is(): string {
    return 'app-country-card';
  } 

  @Input() countryObject: Country = new Country('Spain', 'ES', 'Europe/Madrid');
  @Input() disableReference: boolean = false;
  @Output() compareClicked = new EventEmitter<Country>();

  getFlagUrl(): string {
    const code = this.countryObject.isoCode.toUpperCase();
    if (hasFlag(code)) {
      return `https://cdn.jsdelivr.net/npm/country-flag-icons/3x2/${code}.svg`;
    }
    return '';
  }

  onCompare(event: any) {
    this.compareClicked.emit(this.countryObject);
  }

}
