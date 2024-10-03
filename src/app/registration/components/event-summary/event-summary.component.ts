import {Component, inject, Input} from '@angular/core';
import {RegisteredEvent} from '../../models/event.entity';
import {MatCardModule} from '@angular/material/card';
import {AttendeeService} from '../../services/attendee.service';
import {TranslateModule} from '@ngx-translate/core';
import {RatingService} from '../../../engagement/services/rating.service';
import {DecimalPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-event-summary',
  standalone: true,
  imports: [MatCardModule, TranslateModule, NgIf, DecimalPipe],
  templateUrl: './event-summary.component.html',
  styleUrl: './event-summary.component.css'
})
export class EventSummaryComponent {
  @Input() event!: RegisteredEvent;
  private attendeeService: AttendeeService = inject(AttendeeService);
  private ratingService: RatingService = inject(RatingService);
  averageRating: number = 0;

  constructor() {
    this.getEventAttendees();
    this.getEventRating();
  }

  getEventAttendees(): void {
    this.attendeeService.getAll().subscribe((data: any) => {
      const filteredAttendees = data.filter((attendee: any) => attendee.eventId === this.event.id);
      this.event.checkInAttendees = filteredAttendees.filter((attendee: any) => attendee.checkedInAt).length;
    });
  }

  getEventRating(): void {
    this.ratingService.getAll().subscribe((data: any) => {
      const filteredRatings = data.filter((rating: any) => rating.eventId === this.event.id);
      if (filteredRatings.length > 0) {
        const total = filteredRatings.reduce((acc: number, rating: any) => acc + rating.rating, 0);
        this.averageRating = Math.round((total / filteredRatings.length) * 10) / 10;
      } else {
        this.averageRating = 0;
      }
    this.event.averageRating = this.averageRating;
    });
  }

}
