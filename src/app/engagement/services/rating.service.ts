import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Rating} from '../models/rating.entity';

/**
 * Rating service
 * @class RatingService
 * @extends BaseService
 * This class is used to perform CRUD operations on Rating entity
 * @property resourceEndpoint {string} - The API endpoint to Rating entity
 * @method constructor() - This method creates a new instance of RatingService
 * @author Johan Principe Godoy
 * @version 1.0
 */

@Injectable({
  providedIn: 'root'
})
export class RatingService extends BaseService<Rating>{

  constructor() {
    super();
    this.resourceEndpoint = '/ratings';
  }
}
