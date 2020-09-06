import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {

/**
 * method will return a list of registered person entities
 */
  getPeople(): any {
    return [ {name : "name", age: 23} ];
  }
}
