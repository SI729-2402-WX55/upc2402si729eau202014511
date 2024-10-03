import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {RegisteredEvent} from '../models/event.entity';

/**
 * Event service
 * @class EventService
 * @extends BaseService
 * This class is used to perform CRUD operations on Event entity
 * @property resourceEndpoint {string} - The API endpoint to Event entity
 * @method constructor() - This method creates a new instance of EventService
 * @author Johan Principe Godoy
 * @version 1.0
 */

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService<RegisteredEvent>{

  constructor() {
    super();
    this.resourceEndpoint  = '/events';
  }
}
