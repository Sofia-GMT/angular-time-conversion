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

  referenceCountry: Country | null = null;
  disableReferenceSelection: boolean = false;
  hours: number = 0;
  minutes: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  countryList: Country[] = [
    new Country('United States', '2024-06-01', 'US', '10:00 AM'), 
    new Country('United Kingdom', '2024-06-01', 'GB', '3:00 PM'), 
    new Country('Japan', '2024-06-02', 'JP', '11:00 PM'), 
    new Country('Australia', '2024-06-02', 'AU', '1:00 AM')
  ];

  onReferenceChange(event: any) {
    this.referenceCountry = event.value;
    console.log('Selected reference country: ', this.referenceCountry);
  }

  onReferenceSelected(country: Country) {
    this.referenceCountry = country;
    this.disableReferenceSelection = true;
    console.log('Reference country selected:', country);
    
    // Refresh only the cards
    this.cdr.detectChanges();
  }

  onReferenceDeselected() {
    this.referenceCountry = null;
    this.disableReferenceSelection = false;
  
    // Refresh only the cards
    this.cdr.detectChanges();
  }

  checkDisableReference(country: Country): boolean {
    return this.disableReferenceSelection && this.referenceCountry?.isoCode !== country.isoCode;
  }

  onCompareCountry(country: Country) {
    console.log('COMPARE clicked for country: ', country.countryName);
  }

  
}
