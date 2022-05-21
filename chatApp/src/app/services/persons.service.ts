import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/Profile';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor() { }

 addProfile(){
  if(this.profileCount >= 9){
    return;
  }

  this.profileCount++;
  this.profiles.push({id: this.profileCount, name: `Person ${this.profileCount}`});
} 

  profileCount: number = 0;
  profiles: Array<Profile> = []; 
}
