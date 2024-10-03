import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AttendeeService } from '../../../registration/services/attendee.service';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Attendee } from '../../../registration/models/attendee.entity';
import { RegisteredEvent } from '../../../registration/models/event.entity';
import { EventService } from '../../../registration/services/event.service';
import { NgIf } from '@angular/common';
import {Rating} from '../../models/rating.entity';
import {RatingService} from '../../services/rating.service';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-add-rating',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    TranslateModule
  ],
  templateUrl: './add-rating.component.html',
  styleUrl: './add-rating.component.css'
})
export class AddRatingComponent {
  ratingForm : FormGroup;
  rating!: Rating;
  private ratingService: RatingService = inject(RatingService);
  private attendeeService: AttendeeService = inject(AttendeeService);
  checkInMessage = '';

  constructor(private router: Router) {
    this.ratingForm = new FormGroup({
      ticketIdentifier: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
    });
  }

  rate() {
    const ticketIdentifier = this.ratingForm.value.ticketIdentifier;
    this.attendeeService.getAll().subscribe(
      (response: Attendee[]) => {
        const foundAttendee = response.find(attendee => attendee.ticketIdentifier === ticketIdentifier);

        if (foundAttendee) {
          this.checkExistingRating(foundAttendee);
        } else {
          this.checkInMessage = 'Invalid Ticket Identifier';
        }
      },
      error => {
        console.error('Error fetching attendees:', error);
        this.checkInMessage = 'An error occurred while validating the ticket. Please try again.';
      }
    );
  }

  checkExistingRating(attendee: Attendee) {
    this.ratingService.getAll().subscribe((ratings: Rating[]) => {
      const existingRating = ratings.find(rating =>
        rating.attendeeId === attendee.id && rating.eventId === attendee.eventId
      );

      if (existingRating) {
        this.checkInMessage = 'You have already rated this event.';
      } else {
        this.processRating(attendee);
      }
    });
  }

  processRating(foundAttendee: Attendee) {
    if (foundAttendee.checkedInAt) {
      const now = new Date().toISOString();
      const rating = {
        attendeeId: foundAttendee.id,
        eventId: foundAttendee.eventId,
        rating: this.ratingForm.value.rating,
        ratedAt: now
      };
      this.ratingService.create(rating).subscribe(() => {
        this.checkInMessage = 'Event successfully \n' +
          'rated!';
      });
    } else {
      this.checkInMessage = 'You can only rate events \n' +
        'you have attended to';
    }
  }

  cancel() {
    this.ratingForm.reset();
    this.router.navigate(['/home']);
  }

}
