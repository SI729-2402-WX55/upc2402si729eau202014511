import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';


@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    TranslateModule,
    LanguageSwitcherComponent
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

}
