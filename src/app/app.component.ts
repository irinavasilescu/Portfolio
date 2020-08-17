import { Component } from '@angular/core';
import { UiStyleToggleService } from './services/ui-style-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private uiStyleToggleService: UiStyleToggleService
  ) {}

  title = 'portfolio';

  toggleTheme() {
    this.uiStyleToggleService.toggle();
  }
}
