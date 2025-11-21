import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CustomHeader } from './components/custom-header/custom-header';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CustomHeader, MatButtonModule, MatSidenavModule, 
    MatIconModule, MatDivider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Time Conversion App');

  selectedReference(event: any) {
    console.log('Evento recibido desde el header: ', event);
  }
}
