/**
 * Event Entity
 * @class RegisteredEvent
 * @description
 * This class is used to represent an event entity.
 * It contains the following properties:
 * @property id: number - The id of the event.
 * @property name: string - The name of the event.
 * @property description: string - The description of the event.
 * @property scheduledAt: string - The date and time the event is scheduled.
 * @property checkInAttendees: number - The number of attendees checked in for the event.
 * @property averageRating: number - The average rating of the event.
 * @author Johan Principe Godoy
 * @version 1.0
 */

export class RegisteredEvent {
  id: number;
  name: string;
  description: string;
  scheduledAt: string;
  checkInAttendees?: number;
  averageRating?: number;

  constructor(event: {
    id?: number,
    name?: string,
    description?: string,
    scheduledAt?: string,
    checkInAttendees?: number,
    averageRating?: number
  }) {
    this.id = event.id || 0;
    this.name = event.name || '';
    this.description = event.description || '';
    this.scheduledAt = event.scheduledAt || '';
    this.checkInAttendees = event.checkInAttendees || 0;
    this.averageRating = event.averageRating || 0;
  }
}
