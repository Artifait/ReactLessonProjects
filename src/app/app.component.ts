import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TsProject';
}
