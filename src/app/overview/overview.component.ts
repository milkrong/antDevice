import { Component, OnInit, Input } from '@angular/core';
import { DevicesService } from '../devices.service';
import { Device } from '../device';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  devices: Device[];

  constructor(private deviceService: DevicesService) {
      this.devices = this.deviceService.getDevices();
   }

  ngOnInit() {
  }

}
