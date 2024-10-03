import {Component, inject, OnInit} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {EventsGridComponent} from '../../../registration/components/events-grid/events-grid.component';
import {RegisteredEvent} from '../../../registration/models/event.entity';
import {EventService} from '../../../registration/services/event.service';


@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [
    TranslateModule,
    EventsGridComponent
  ],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css'
})
export class HomeContentComponent implements OnInit{
  events: Array<RegisteredEvent> = [];
  private eventService: EventService = inject(EventService);

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getAll().subscribe((response: any) => {
      response.forEach((event: any) => {
        let registeredEvent = new RegisteredEvent({
          id: event.id,
          name: event.name,
          description: event.description,
          scheduledAt: event.scheduledAt,
        });
        this.events.push(registeredEvent);
      });
      console.log(this.events);
    })
  }
}
