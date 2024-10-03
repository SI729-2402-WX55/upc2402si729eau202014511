import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarContentComponent} from './public/components/toolbar-content/toolbar-content.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upc2402si729eau202014511';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
