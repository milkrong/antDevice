import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { Device } from '../device';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})
export class TopPanelComponent {
  devices: Device[];
  topDevices: Device[];
  sortName: string | null = null;
  sortValue: string | null = null;

  constructor(private deviceService: DevicesService) { 
    this.devices = this.deviceService.getDevices();
    this.search();
  }

  sort(sort: { key: string; value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  search(): void {
    const data = this.devices;
    /** sort data **/
    if (this.sortName && this.sortValue) {
      const sortedData = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.sortName!] > b[this.sortName!]
            ? 1
            : -1
          : b[this.sortName!] > a[this.sortName!]
          ? 1
          : -1
      );
      this.topDevices = sortedData.slice(0, 5);
    } else {
      this.topDevices = data.slice(0, 5);
    }
  }

}
