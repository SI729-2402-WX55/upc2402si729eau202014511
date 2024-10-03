import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Attendee} from '../models/attendee.entity';

/**
 * Attendee service
 * @class AttendeeService
 * @extends BaseService
 * This class is used to perform CRUD operations on Attendee entity
 * @property resourceEndpoint {string} - The API endpoint to Attendee entity
 * @method constructor() - This method creates a new instance of AttendeeService
 * @author Johan Principe Godoy
 * @version 1.0
 */

@Injectable({
  providedIn: 'root'
})
export class AttendeeService extends BaseService<Attendee>{

  constructor() {
    super();
    this.resourceEndpoint = '/attendees';
  }
}
