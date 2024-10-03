import { Component } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {AddRatingComponent} from '../../components/add-rating/add-rating.component';

@Component({
  selector: 'app-new-rating',
  standalone: true,
  imports: [
    TranslateModule,
    AddRatingComponent
  ],
  templateUrl: './new-rating.component.html',
  styleUrl: './new-rating.component.css'
})
export class NewRatingComponent {

}
