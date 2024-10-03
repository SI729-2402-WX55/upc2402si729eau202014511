import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    MatButton
  ],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {
  path: string;

  constructor(private router: Router) {
    this.path = this.router.url;
  }
}
