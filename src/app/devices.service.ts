import { Injectable } from '@angular/core';
import { Device } from './device';
import { DEVICES } from './mock-devices';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  getDevices() {
    return DEVICES;
  }

  constructor() { }
}
