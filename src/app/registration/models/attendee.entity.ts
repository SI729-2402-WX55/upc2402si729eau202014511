/**
 * Attendee Entity
 * @class Attendee
 * @description
 * This class is used to represent an attendee entity.
 * It contains the following properties:
 * @property id: number - The id of the attendee.
 * @property firstName: string - The first name of the attendee.
 * @property lastName: string - The last name of the attendee.
 * @property eventId: number - The id of the event the attendee is registered for.
 * @property ticketIdentifier: string - The ticket identifier of the attendee.
 * @property checkedInAt: string - The date and time the attendee was checked in.
 * @author Johan Principe Godoy
 * @version 1.0
 */

export class Attendee {
  id: number;
  firstName: string;
  lastName: string;
  eventId: number;
  ticketIdentifier: string;
  checkedInAt: string;

  constructor(attendee: {
    id: number,
    firstName: string,
    lastName: string,
    eventId: number,
    ticketIdentifier: string,
    checkedInAt: string
  }) {
    this.id = attendee.id || 0;
    this.firstName = attendee.firstName || '';
    this.lastName = attendee.lastName || '';
    this.eventId = attendee.eventId || 0;
    this.ticketIdentifier = attendee.ticketIdentifier || '';
    this.checkedInAt = attendee.checkedInAt || '';
  }
}
