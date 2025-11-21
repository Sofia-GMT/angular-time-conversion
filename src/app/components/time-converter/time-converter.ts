import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCard } from '../country-card/country-card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-time-converter',
  imports: [CommonModule, CountryCard, MatSelectModule, MatFormFieldModule],
  templateUrl: './time-converter.html',
  styleUrl: './time-converter.css',
})
export class TimeConverter {

  selectedCountry: Country | null = null;
  selectedTime: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  countryList: Country[] = [
    new Country('United States', 'US', 'America/Indiana/Indianapolis'), 
    new Country('Spain', 'ES', 'Europe/Madrid'),  
    new Country('India', 'IN', 'Asia/Kolkata'),
  ];

  onCompareCountry(country: Country) {
    console.log('COMPARE clicked for country: ', country.countryName);
    this.selectedCountry = country;
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: country.timeZone };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    this.selectedTime = formatter.format(new Date());
  }

  
}
