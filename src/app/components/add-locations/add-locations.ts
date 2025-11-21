import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-add-locations',
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './add-locations.html',
  styleUrl: './add-locations.css',
})
export class AddLocations {
  countryName = '';
}
