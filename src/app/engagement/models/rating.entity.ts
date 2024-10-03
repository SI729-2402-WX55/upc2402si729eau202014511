/**
 * Rating Entity
 * @class Rating
 * @description
 * This class is used to represent a rating entity.
 * It contains the following properties:
 * @property id: number - The id of the rating.
 * @property attendeeId: number - The id of the attendee who rated the event.
 * @property eventId: number - The id of the event that was rated.
 * @property rating: number - The rating given to the event.
 * @property ratedAt: string - The date and time the event was rated.
 * @author Johan Principe Godoy
 * @version 1.0
 */

export class Rating {
  id: number;
  attendeeId: number;
  eventId: number;
  rating: number;
  ratedAt: string;

  constructor( rating: {
    id?: number;
    attendeeId?: number;
    eventId?: number;
    rating?: number;
    ratedAt?: string;
  }) {
    this.id = rating.id || 0;
    this.attendeeId = rating.attendeeId || 0;
    this.eventId = rating.eventId || 0;
    this.rating = rating.rating || 0;
    this.ratedAt = rating.ratedAt || '';
  }
}
