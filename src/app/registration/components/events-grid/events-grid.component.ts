import {Component, Input} from '@angular/core';
import {RegisteredEvent} from '../../models/event.entity';
import {MatNavList} from '@angular/material/list';
import {EventSummaryComponent} from '../event-summary/event-summary.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-events-grid',
  standalone: true,
  imports: [
    MatNavList,
    EventSummaryComponent,
    TranslateModule
  ],
  templateUrl: './events-grid.component.html',
  styleUrl: './events-grid.component.css'
})
export class EventsGridComponent {
  @Input() events: Array<RegisteredEvent> = [];
}
