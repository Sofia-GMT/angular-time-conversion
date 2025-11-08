import { Component, Output, EventEmitter, Input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-custom-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './custom-header.html',
  styleUrl: './custom-header.css',
})
export class CustomHeader {
  @Input() appTitle: string = 'Time Conversion App';
  
  @Output() menuClick = new EventEmitter<void>();

  onMenuClick() {
    console.log('ok');
    this.menuClick.emit();
  }
}
