import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{
    id: 1,
    name: 'José',
    lastname: 'Flores',
    email: 'joseflores@gmail.com',
    username: 'joseflores',
    password: '123456'
  },
  {
    id: 2,
    name: 'Carlos',
    lastname: 'Henriquez',
    email: 'carloshenriquez@gmail.com',
    username: 'carloshenriquez',
    password: '123456'
  }];
  
  constructor() { }

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
